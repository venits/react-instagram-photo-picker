import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const instagramIcon = require('./instagram_icon.png');

export default class LoginToInstagram extends Component {

  state = {
    loginError: false,
  };

  componentWillReceiveProps() {
    this.setState({ loginError: false });
  }

  loginToInstagram = () => {
    if (window.InstAuth) {
      window.addEventListener("message", this._receiveMessage);
      window.InstAuth.startAuthFlow();
    } else {
      alert('You need to install instagram-web-oauth in order to use this module.');
    }
  };

  _receiveMessage = (message) => {
    if (typeof message.data === 'string' && message.data.search('access_token') > -1) {
      this.props.success(JSON.parse(message.data).access_token);
    } else {
      this.setState({ loginError: true });
    }
    window.removeEventListener("message", this._receiveMessage);
  };

  render() {
    return (
      <div className={css(styles.container)}>
        {this.state.loginError && <div className={css(styles.error)}>
          <p className={css(styles.errorText)}>Problem occured when logging in.</p>
          <p className={css(styles.errorTextBottom)}>Please try again.</p>
        </div>}
        <img className={css(styles.icon)} src={instagramIcon} alt="" />
        <button className={css(styles.login)} onClick={this.loginToInstagram}>
          <p className={css(styles.loginText)}>SIGN IN WITH INSTAGRAM</p>
        </button>
        <p className={css(styles.infoText)}>You will be able to pick photos from your Instagram profile and show them in application.</p>
      </div>
    );
  }
}

LoginToInstagram.propTypes = {
  success: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5vh 1.5vw 1vh 1.5vw',
    borderRadius: '2%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  login: {
    border: '1px solid #673AB7',
    backgroundColor: 'white',
    marginBottom: '1vh',
    marginTop: '1vh',
    ':hover': {
      backgroundColor: '#EDE7F6',
    },
    ':active': {
      outline: 0,
      backgroundColor: '#D1C4E9',
    },
    ':focus': {
      outline: 0,
    },
  },
  loginText: {
    color: '#673AB7',
    margin: 0,
    padding: '1vh 1vw 1vh 1vw',
    fontSize: '120%',
    fontWeight: '500',
  },
  icon: {
    width: '6vw',
    height: '6vw',
    marginTop: '2vh',
    marginBottom: '2vh',
  },
  infoText: {
    width: '14vw',
    textAlign: 'center',
    color: '#9E9E9E',
  },
  error: {
    backgroundColor: '#ffd2d6',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.25vh',
    marginBottom: '1vh',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2%',
  },
  errorText: {
    fontSize: '90%',
    textAlign: 'center',
    fontWeight: '500',
    padding: '1.0vh 1.5vw 0 1.5vw',
    margin: 0,
    color: '#d74343',
  },
  errorTextBottom: {
    fontSize: '90%',
    textAlign: 'center',
    fontWeight: '500',
    padding: '0.5vh 1.5vw 1.0vh 1.5vw',
    margin: 0,
    color: '#d74343',
  },
});
