import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInForm from '../forms/SignInForm';
import { signIn } from '../../actions/signActions';

function SignInPage({ dispatch }) {
  function handleSubmit(values) {
    return new Promise((resolve, reject) => {
      dispatch(signIn.request({ values, resolve, reject }));
    });
  }

  return (
    <SignInForm
      onSubmit={handleSubmit}
    />
  );
}

export default withRouter(connect()(SignInPage));
