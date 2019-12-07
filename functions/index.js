const functions = require('firebase-functions');

const express = require('express');
const { db } = require('./utils/admin');

const app = express();

const FBAuth = require('./utils/fbAuth');

const cors = require('cors');
app.use(cors());

const {
  bookingSitter,
  getSitters,
  getSitter,
  getBooking
} = require('./handlers/Booking');

const {
  getAllPosts,
  singlePost,
  getPost,
  commentPost,
  likePost,
  unlikePost,
  deletePost
} = require('./handlers/Posts');
const {
  signUp,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
  createProfile,
  getParentDetails,
  getParents
} = require('./handlers/Users');

//Creating middleware in order to authenticate the user with the right token since we want people to be logged in before submitting a post

app.post('/sitter/:sitterId/booking', FBAuth, bookingSitter);

app.get('/booking/:handle', FBAuth, getBooking);

app.get('/posts', getAllPosts);

app.get('/parent/:parentId', getParentDetails);

app.get('/post/:postId/like', FBAuth, likePost);
app.get('/post/:postId/unlike', FBAuth, unlikePost);

app.post('/post', FBAuth, singlePost);
app.delete('/post/:postId', FBAuth, deletePost);

app.get('/post/:postId', getPost);

//TODO delete post
//like a post
// unlike a post
app.post('/post/:postId/comment', FBAuth, commentPost);

app.get('/sitters', getSitters);

app.post('/user', FBAuth, addUserDetails);

app.get('/parents', getParents);

app.get('/sitters/:sitterId', getSitter);

app.post('/signup', signUp);

app.post('/parent', FBAuth, createProfile);

app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.get('/user', FBAuth, getAuthenticatedUser);
app.get('/user/:handle', getUserDetails);

exports.api = functions.region('europe-west1').https.onRequest(app);

exports.createNotificationOnLike = functions
  .region('europe-west1')
  .firestore.document('likes/{id}')
  .onCreate(snapshot => {
    return db
      .doc(`/posts/${snapshot.data().postId}`)
      .get()
      .then(doc => {
        if (
          doc.exists &&
          doc.data().userHandle !== snapshot.data().userHandle
        ) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'like',
            read: false,
            postId: doc.id
          });
        }
        return;
      })
      .catch(err => console.error(err));
  });

exports.createNotificationOnComment = functions
  .region('europe-west1')
  .firestore.document('comments/{id}')
  .onCreate(snapshot => {
    return db
      .doc(`/posts/${snapshot.data().postId}`)
      .get()
      .then(doc => {
        if (
          doc.exists &&
          doc.data().userHandle !== snapshot.data().userHandle
        ) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'comment',
            read: false,
            postId: doc.id
          });
        }
        return;
      })
      .catch(err => {
        console.error(err);
        return;
      });
  });
exports.deleteNotificationOnUnLike = functions
  .region('europe-west1')
  .firestore.document('likes/{id}')
  .onDelete(snapshot => {
    return db
      .doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch(err => {
        console.error(err);
        return;
      });
  });

exports.onUserImageChange = functions
  .region('europe-west1')
  .firestore.document('/users/{userId}')
  .onUpdate(change => {
    console.log(change.before.data());
    console.log(change.after.data());
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log('image has changed');
      const batch = db.batch();
      return db
        .collection('posts')
        .where('userHandle', '==', change.before.data().handle)
        .get()
        .then(data => {
          data.forEach(doc => {
            const post = db.doc(`/posts/${doc.id}`);
            batch.update(post, { userImage: change.after.data().imageUrl });
          });
          return batch.commit();
        });
    } else return true;
  });

exports.onpostDelete = functions
  .region('europe-west1')
  .firestore.document('/posts/{postId}')
  .onDelete((snapshot, context) => {
    const postId = context.params.postId;
    const batch = db.batch();
    return db
      .collection('comments')
      .where('postId', '==', postId)
      .get()
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        });
        return db
          .collection('likes')
          .where('postId', '==', postId)
          .get();
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/likes/${doc.id}`));
        });
        return db
          .collection('notifications')
          .where('postId', '==', postId)
          .get();
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/notifications/${doc.id}`));
        });
        return batch.commit();
      })
      .catch(err => console.error(err));
  });
