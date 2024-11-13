import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import './styles.css';

class Auth extends Component {
  state = {
    isLogin: true,
  };
  showLogin = () => {
    this.setState({ isLogin: true });
  }

  showSignup = () => {
    this.setState({ isLogin: false });
  }

  render() {
    return (
      <div className="auth-container">
        <h2 className="auth-title" align="center">HealthSync</h2>
        <div className="tab-container">
          <div
            onClick={this.showLogin}
            className={`tab ${this.state.isLogin ? 'tab-active' : ''}`}
          >
            Login
          </div>
          <div
            onClick={this.showSignup}
            className={`tab ${!this.state.isLogin ? 'tab-active' : ''}`}
          >
            Signup
          </div>
        </div>
        {this.state.isLogin ? <Login /> : <Signup />}
      </div>
    );
  }
}

export default Auth;
