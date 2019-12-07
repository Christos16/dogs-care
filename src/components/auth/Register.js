import React, { Component } from 'react';
import TextFieldGroup from '../../components/common/TextFieldsGroup';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions/authAction';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
      loading: false,
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.user.authenticated) {
      this.props.history.push('/petsitters');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.errors) {
      this.setState({ errors: nextProps.errors.errors });
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
    this.props.signUp(newUserData, this.props.history);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handle, email, password, confirmPassword, errors } = this.state;
    return (
      <div className='register'>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-8 m-auto mt-3'>
              <h1 className='display-4 text-center' style={{ color: 'purple' }}>
                Sign Up
              </h1>
              <p className='lead text-center'>
                Create your <span style={{ color: 'purple' }}>Dogs-care </span>
                account for pet parents
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder='Username'
                  name='handle'
                  value={handle}
                  onChange={this.onChange}
                  label='Provide your name'
                  error={errors.handle ? errors.handle : errors.mesage}
                  pattern='^\S+$'
                />
                <TextFieldGroup
                  placeholder='Email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={this.onChange}
                  required
                  label='Email'
                  error={errors.email ? errors.email : errors.mesage}
                />
                <TextFieldGroup
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={this.onChange}
                  label='Password'
                  required
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  onChange={this.onChange}
                  error={errors.confirmPassword}
                />
                <button
                  type='submit'
                  className='btn btn-info btn-block mt-4 button'
                >
                  SIGN UP
                </button>
                <div className='text-center lead'>or</div>
                <p className='lead text-center'>
                  If you already have an account, you can sign in
                </p>
                <Link to='/login'>
                  <button className='btn btn-primary btn-block mt-4'>
                    SIGN IN
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { signUp }
)(Register);
