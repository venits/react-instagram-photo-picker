import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default class ButtonsPanel extends Component {
  render() {
    return (
      <div className={css(styles.buttonsContainer)}>
        <div className={css(styles.cancelContainer)}>
          <button className={css(styles.cancel)} onClick={this.props.cancel}>
            <p className={css(styles.cancelText)}>CANCEL</p>
          </button>
        </div>
        <div className={css(styles.loadContainer)}>
          <button className={css(styles.load)} onClick={this.props.load}>
            {this.props.loadingMore
            ? <div className={css(styles.spinner)} />
            : <p className={css(styles.loadText)}>LOAD MORE</p>}
          </button>
        </div>
        <div className={css(styles.confirmContainer)}>
          <button
            className={css(this.props.count ? styles.confirm : styles.confirmOff)}
            onClick={this.props.confirm}
          >
            <p className={css(this.props.count ? styles.confirmText : styles.confirmTextOff)}>CONFIRM</p>
          </button>
        </div>
      </div>
    );
  }
}

const spin = {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
};

ButtonsPanel.propTypes = {
  count: PropTypes.bool.isRequired,
  cancel: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    marginTop: '1vw',
    marginBottom: '1vw',
    paddingTop: '0.4vw',
    paddingBottom: '0.4vw',
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  spinner: {
    border: '0.2vw solid #BBDEFB',
    borderTop: '0.2vw solid #2196F3',
    borderRadius: '50%',
    width: '1.25vw',
    height: '1.25vw',
    animationName: [spin],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  cancelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '1vw',
    flex: 1,
  },
  loadContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  confirmContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '1vw',
    flex: 1,
  },
  cancel: {
    border: '1px solid #F44336',
    backgroundColor: 'white',
    height: '4.5vh',
    ':hover': { backgroundColor: '#FFEBEE' },
    ':active': { outline: 0, backgroundColor: '#FFCDD2' },
    ':focus': { outline: 0 },
  },
  cancelText: {
    color: '#F44336',
    margin: 0,
    padding: '1vh 2vw 1vh 2vw',
    fontSize: '120%',
    fontWeight: '500',
  },
  load: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #2196F3',
    backgroundColor: 'white',
    width: '10vw',
    height: '4.5vh',
    ':hover': { backgroundColor: '#E3F2FD' },
    ':active': { outline: 0, backgroundColor: '#BBDEFB' },
    ':focus': { outline: 0 },
  },
  loadText: {
    color: '#2196F3',
    margin: 0,
    padding: '1vh 2vw 1vh 2vw',
    fontSize: '120%',
    fontWeight: '500',
  },
  confirm: {
    border: '1px solid #4CAF50',
    backgroundColor: 'white',
    height: '4.5vh',
    ':hover': { backgroundColor: '#E8F5E9' },
    ':active': { outline: 0, backgroundColor: '#C8E6C9' },
    ':focus': { outline: 0 },
  },
  confirmOff: {
    border: '1px solid #BDBDBD',
    backgroundColor: 'white',
    ':active': { outline: 0 },
    ':focus': { outline: 0 },
  },
  confirmText: {
    color: '#4CAF50',
    margin: 0,
    padding: '1vh 2vw 1vh 2vw',
    fontSize: '120%',
    fontWeight: '500',
  },
  confirmTextOff: {
    color: '#BDBDBD',
    margin: 0,
    padding: '1vh 2vw 1vh 2vw',
    fontSize: '120%',
    fontWeight: '500',
  },
});
