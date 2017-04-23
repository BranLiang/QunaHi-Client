import React, { Component } from 'react';
import SignInPage from './pages/SignInPage';
import {
  Route,
  Link
} from 'react-router-dom';

class QunaHi extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/signin">Signin</Link></li>
        </ul>

        <hr />

        <Route path="/signin" component={SignInPage} />
      </div>
    );
  }
}

export default QunaHi;
