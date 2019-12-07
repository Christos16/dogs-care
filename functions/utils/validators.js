const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = string => {
  if (string.trim() === '') return true;
  else return false;
};

exports.validateSignUpData = data => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Must be a valid email address';
  }

  if (isEmpty(data.password)) errors.password = 'Must not be empty';
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = 'Passwords must match';
  if (isEmpty(data.handle)) errors.handle = 'Must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateLoginData = data => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.reduceUserDetails = data => {
  let userDetails = {};
  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== 'http') {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};

//Validate Booking

exports.validateBooking = data => {
  let errors = {};

  if (isEmpty(data.from.trim())) errors.from = 'Drop off date is required';
  if (isEmpty(data.to.trim())) errors.to = 'Pick up date is required';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateProfile = data => {
  let errors = {};
  if (isEmpty(data.location.trim())) errors.location = 'Location is required';
  if (isEmpty(data.breed.trim()))
    errors.breed = 'Providing the breed is required';
  if (isEmpty(data.size.trim())) errors.size = 'Size of the pet is required';
  if (isEmpty(data.personality.trim()))
    errors.personality = 'Pet personality is required';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.reduceUserProfile = data => {
  let userProfile = {};
  if (!isEmpty(data.instagram.trim())) {
    if (data.instagram.trim().substring(0, 4) !== 'http') {
      userProfile.instagram = `https://${data.instagram.trim()}`;
    } else userProfile.instagram = data.instagram;
  }

  if (!isEmpty(data.facebook.trim())) {
    if (data.facebook.trim().substring(0, 4) !== 'http') {
      userProfile.facebook = `https://${data.facebook.trim()}`;
    } else userProfile.facebook = data.facebook;
  }

  if (!isEmpty(data.twitter.trim())) {
    if (data.twitter.trim().substring(0, 4) !== 'http') {
      userProfile.twitter = `https://${data.twitter.trim()}`;
    } else userProfile.twitter = data.twitter;
  }

  if (!isEmpty(data.linkedin.trim())) {
    if (data.linkedin.trim().substring(0, 4) !== 'http') {
      userProfile.linkedin = `https://${data.linkedin.trim()}`;
    } else userProfile.linkedin = data.linkedin;
  }
  return userProfile;
};
