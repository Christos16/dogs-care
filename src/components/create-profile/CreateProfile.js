import React, { Component } from 'react';
import InputGroup from '../../components/common/InputGroup';
import SelectListGroup from '../../components/common/SelectListGroup';
import TextFieldsGroup from '../../components/common/TextFieldsGroup';
import TextAreaFieldGroup from '../../components/common/TextAreaFieldGroup';
import { createProfile } from '../../actions/SittersAction';
import { connect } from 'react-redux';
import { getUserData, uploadImage } from '../../actions/authAction';
import PropTypes from 'prop-types';
import './createProfile.styles.scss';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      breed: '',
      size: '',
      location: '',
      personality: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      breed: this.state.breed,
      size: this.state.size,
      personality: this.state.personality,

      location: this.state.location,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData);

    setTimeout(() => {
      this.redirect();
    }, 4000);
  };

  redirect = () => {
    return this.props.history.push('/');
  };

  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  render() {
    let socialInputs;

    if (this.state.displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder='Twitter Profile URL'
            name='twitter'
            icon='fab fa-twitter'
            value={this.state.twitter}
            onChange={this.onChange}
            //  error={errors.twitter}
          />

          <InputGroup
            placeholder='Facebook Page URL'
            name='facebook'
            icon='fab fa-facebook'
            value={this.state.facebook}
            onChange={this.onChange}
            //  error={errors.facebook}
          />

          <InputGroup
            placeholder='Linkedin Profile URL'
            name='linkedin'
            icon='fab fa-linkedin'
            value={this.state.linkedin}
            onChange={this.onChange}
            //  error={errors.twitter}
          />

          <InputGroup
            placeholder='Instagram Profile URL'
            name='instagram'
            icon='fab fa-instagram'
            value={this.state.instagram}
            onChange={this.onChange}
            // error={errors.instagram}
          />
        </div>
      );
    }

    const options = [
      { label: '* Select size of your pet', value: 0 },
      { label: 'Small (5-10kg', value: 'Small (5-10kg)' },
      { label: 'Medium (15-20kg)', value: 'Medium (15-20kg)' },
      { label: 'Big (+20kg)', value: 'Big (+20kg)' }
    ];

    const { credentials } = this.props.credentials;

    return (
      <form
        className='create-profile'
        style={{ backgroundColor: 'white', paddingBottom: '100px' }}
      >
        <form className='container'>
          <div class='py-1 text-center'>
            <h2 className='mb-4 display-4 mt-5' style={{ color: '#cd199b' }}>
              Create Your Profile
            </h2>
            <p
              class='lead mb-5 mt-5 mb-3'
              style={{ color: 'black', font: 'bold' }}
            >
              This information will help us serve you better.
            </p>
          </div>
          <div class='row'>
            <div class='col-md-4 order-md-2 mb-4'></div>
            <div className=''>
              <div
                className='card mr-3 changement'
                style={{ borderRadius: '20px', backgroundColor: 'purple' }}
              >
                <img
                  src={credentials.imageUrl}
                  alt='profile'
                  style={{
                    width: '230px',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />

                <div className='mt-2 ml-4 mb-2'>
                  <input
                    type='file'
                    id='imageInput'
                    onChange={this.handleImageChange}
                    placeholder='Edit Profile picture'
                    hidden='hidden'
                  />
                  <button
                    type='button'
                    className='btn btn-sm pitch'
                    onClick={this.handleEditPicture}
                  >
                    <i class='fas fa-image icone' /> Upload a profile picture
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-8 order-md-1'>
              <small className='d-block pb-3'>* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldsGroup
                  placeholder='* Address'
                  name='location'
                  value={this.state.location}
                  onChange={this.onChange}
                  info='State your full address (eg. Ermou 69, Syntagma)'
                  required
                />
                <TextFieldsGroup
                  placeholder='* Breed'
                  name='breed'
                  value={this.state.breed}
                  onChange={this.onChange}
                  info='Tell us the breed of your pet'
                  required
                />
                <SelectListGroup
                  placeholder='* Size'
                  name='size'
                  value={this.state.size}
                  onChange={this.onChange}
                  options={options}
                  info='Give us an idea of the size of your pet'
                  required
                />
                <TextFieldsGroup
                  placeholder='* Pet description'
                  name='personality'
                  value={this.state.personality}
                  onChange={this.onChange}
                  info='Please use coma separated values to describe your pet(e.g Playfull, Sweet, Loves to eat, Afraid of storms ect...)'
                  required
                />
                <TextAreaFieldGroup
                  placeholder='* Short Bio'
                  name='bio'
                  value={this.state.bio}
                  onChange={this.onChange}
                  info='Tell us a little about yourself and your pet...'
                  isRequired
                />
                <div className='mb-3'>
                  <button
                    type='button'
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className='btn btn-primary'
                  >
                    Add Social Network Links
                  </button>
                  <span className='text-muted'>Optional</span>
                </div>
                {socialInputs}
                <input
                  type='submit'
                  className='btn btn-primary btn-block mt-4'
                  value='Submit'
                  style={{ backgroundColor: 'purple', color: 'white' }}
                />
              </form>
            </div>
          </div>
        </form>
      </form>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getUserData: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  credentials: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  credentials: state.user
});

export default connect(
  mapStateToProps,
  { createProfile, getUserData, uploadImage }
)(CreateProfile);
