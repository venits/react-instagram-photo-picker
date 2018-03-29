import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const instagramIcon = require('../../assets/instagram_icon.png');

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
      console.error('Instagram authorization module is not present.');
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
        {this.state.loginError && <span className={css(styles.error)}>
            Problem occured when logging in.<br/>Please try again.
          </span>}
        <img className={css(styles.icon)} src={instagramIcon} alt="" />
        <button className={css(styles.login)} onClick={this.loginToInstagram}>
          <p className={css(styles.loginText)}>SIGN IN WITH INSTAGRAM</p>
        </button>
        <span className={css(styles.infoText)}>
          Please login to your Instagram<br/>account to view photos.
        </span>
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
    padding: '1em 1.5em 1em 1.5em',
    borderRadius: '1em',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  login: {
    border: '1px solid #673AB7',
    backgroundColor: 'white',
    marginBottom: '1em',
    marginTop: '1.5em',
    borderRadius: '10em',
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
    padding: '0.75em 1em 0.75em 1em',
    fontSize: '120%',
    fontWeight: '500',
  },
  icon: {
    width: '6em',
    height: '6em',
    marginTop: '1em',
    marginBottom: '1em',
  },
  infoText: {
    lineHeight: 1.5,
    marginTop: '0.55em',
    fontSize: '90%',
    display: 'block',
    textAlign: 'center',
    color: '#777',
  },
  error: {
    display: 'block',
    backgroundColor: '#ffd2d6',

    borderRadius: '0.5em',
    fontSize: '90%',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 1.4,
    padding: '0.75em',
    margin: 0,
    color: '#d74343',
  },
});
