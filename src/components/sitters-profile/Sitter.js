import React, { Component } from 'react';
import { getSitter } from '../../actions/SittersAction';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import ProfileHeader from './ProfileHeader';

class Sitter extends Component {
  componentDidMount() {
    this.props.getSitter(this.props.match.params.id);
  }
  render() {
    const { sitter, loading } = this.props.sitter;
    let sitterProfile;

    if (sitter.length === 0 || loading) {
      sitterProfile = <Spinner />;
    } else {
      sitterProfile = (
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-4' style={{ color: 'purple' }}>
              <a href='/' className=''>
                <span className='reference'> Home > </span>
              </a>
              <a href='/petsitters' className=''>
                <span className='reference'>Petsitters > </span>
              </a>
              <span className='reference'> {sitter.sitterHandle}</span>
            </div>
          </div>

          <ProfileHeader sitter={sitter} />
        </div>
      );
    }

    return <div>{sitterProfile}</div>;
  }
}

const mapStateToProps = state => ({
  sitter: state.sitters,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getSitter }
)(Sitter);
