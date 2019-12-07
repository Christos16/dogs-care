const { admin, db } = require('../utils/admin');
const config = require('../utils/config');

const firebase = require('firebase');

//firebase.initializeApp(config);

exports.getSitters = (req, res) => {
  db.collection('sitters')
    .get()
    .then(data => {
      let sitters = [];
      data.forEach(doc => {
        sitters.push({
          sitterId: doc.id,
          available: doc.data().available,
          certified: doc.data().certified,
          facebook: doc.data().facebook,
          instagram: doc.data().instagram,
          services: doc.data().services,
          sitterHandle: doc.data().sitterHandle,
          bio: doc.data().bio,
          image: doc.data().imgUrl,
          location: doc.data().location,
          description: doc.data().description
        });
      });
      return res.json(sitters);
    })
    .catch(err => console.error(err));
};

exports.getSitter = (req, res) => {
  let sitterData = {};
  db.doc(`/sitters/${req.params.sitterId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Sitter not found' });
      }
      sitterData = doc.data();
      sitterData.sitterId = doc.id;
      return db
        .collection('sitters')
        .where('sitterId', '==', req.params.sitterId)
        .get();
    })
    .then(data => {
      sitterData.sitters = [];
      data.forEach(doc => {
        sitterData.sitters.push({
          sitterId: doc.id,
          available: doc.data().available,
          certified: doc.data().certified,
          facebook: doc.data().facebook,
          instagram: doc.data().instagram,
          services: doc.data().services.split(','),
          sitterHandle: doc.data().sitterHandle,
          bio: doc.data().bio,
          image: doc.data().imgUrl,
          location: doc.data().location,
          description: doc.data().description
        });
      });
      return res.json(sitterData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.bookingSitter = (req, res) => {
  let bookingDoc = db
    .collection('bookings')
    .where('userHandle', '==', req.user.handle);

  db.doc(`/sitters/${req.params.sitterId}`)
    .get()
    .then(doc => {
      sitterData = doc.data();
      sitterData.sitterId = doc.id;
      return db.collection('bookings').add({
        from: req.body.from,
        to: req.body.to,
        createAt: new Date().toISOString(),
        comment: req.body.comment,
        email: req.user.email,
        sitterHandle: sitterData.sitterHandle,
        pricing: sitterData.pricing,
        services: sitterData.services,
        userId: req.user.uid,
        userHandle: req.user.handle,
        bookingId: doc.id
      });
    })
    .then(() => {
      return res.json(bookingDoc);
    })
    .catch(err => {
      console.error(err);
    });
};

exports.getBooking = (req, res) => {
  let bookingData;
  db.doc(`/bookings/${req.user.handle}`)
    .get()
    .then(doc => {
      bookingData = doc.data();
      return db
        .collection('bookings')
        .where('userHandle', '==', req.user.handle)
        .get();
    })
    .then(data => {
      bookingData = [];
      data.forEach(doc => {
        bookingData.push({
          sitterHandle: doc.data().sitterHandle,
          services: doc.data().services,
          pricing: doc.data().pricing,
          from: doc.data().from,
          to: doc.data().to,
          createAt: doc.data().createAt,
          userHandle: req.user.handle,
          userId: req.user.uid, 
          comment: doc.data().comment
        });
      });
      return res.json(bookingData);
    })
    .catch(err => {
      console.error(err);
    });
};
