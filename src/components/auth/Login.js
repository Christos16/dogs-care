import React, { Component } from 'react';
import TextFieldsGroup from '../common/TextFieldsGroup';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import './auth.styles.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.authenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors.errors) {
      this.setState({ errors: nextProps.errors.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <div className='login'>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center' style={{ color: 'purple' }}>
                Log In
              </h1>
              <p className='lead text-center'>
                Sign in to your{' '}
                <span style={{ color: 'purple', fontSize: '10' }}>
                  Dogs-care
                </span>{' '}
                account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldsGroup
                  placeholder='Email Address'
                  name='email'
                  type='email'
                  value={email}
                  required
                  onChange={this.onChange}
                  error={errors.email ? errors.email : errors.mesage}
                />

                <TextFieldsGroup
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={this.onChange}
                  required
                  type='password'
                  error={errors.password}
                />

                <button
                  type='submit'
                  className='btn btn-info btn-block mt-4 toucher'
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPros = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToPros,
  { loginUser }
)(Login);
