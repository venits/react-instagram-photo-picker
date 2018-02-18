import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const visibilityOff = require('./visibility_off.svg');

export default class NoPhotos extends Component {
  state = {
    isReloading: false,
  };

  componentWillReceiveProps() {
    this.setState({ isReloading: false });
  }

  reloadPhotos = () => {
    if (!this.state.isReloading) {
      this.setState({ isReloading: true });
      this.props.reload();
    }
  };

  render() {
    return (
      <div className={css(styles.container)}>
        <img src={visibilityOff} alt="" className={css(styles.icon)} />
        <p className={css(styles.text)}>You don't have any photos</p>
        <button className={css(styles.reload)} onClick={this.reloadPhotos}>
          {this.state.isReloading
            ? <div className={css(styles.spinner)} />
            : <p className={css(styles.reloadText)}>RELOAD</p>}
        </button>
      </div>
    );
  }
}

const spin = {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    borderRadius: '2%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '4.5vw',
    height: '4.5vw',
    marginTop: '1vh',
    marginBottom: '0.5vh',
  },
  text: {
    color: '#888',
    fontSize: '110%',
    fontWeight: '600',
  },
  reload: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #2196F3',
    backgroundColor: 'white',
    marginBottom: '1.5vh',
    marginTop: '1vh',
    width: '10vw',
    height: '4.5vh',
    ':hover': { backgroundColor: '#E3F2FD' },
    ':active': {
      outline: 0,
      backgroundColor: '#BBDEFB',
    },
    ':focus': { outline: 0 },
  },
  reloadText: {
    color: '#2196F3',
    margin: 0,
    padding: '1vh 1vw 1vh 1vw',
    fontSize: '120%',
    fontWeight: '500',
  },
  spinner: {
    border: '0.3vw solid #BBDEFB',
    borderTop: '0.3vw solid #2196F3',
    borderRadius: '50%',
    width: '1.5vw',
    height: '1.5vw',
    animationName: [spin],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});

NoPhotos.propTypes = {
  reload: PropTypes.func.isRequired,
};
