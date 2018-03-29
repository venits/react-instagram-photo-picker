import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const more = require('../../../assets/more.svg');
const cancel = require('../../../assets/cancel.svg');
const select = require('../../../assets/select.svg');

export default class ButtonsPanel extends Component {
  render() {
    return (
      <div className={css(styles.buttonsContainer)}>
        <div className={css(styles.cancelContainer)}>
          <button className={css(styles.cancel)} onClick={this.props.cancel}>
            <img className={css(styles.icon)} src={cancel} alt="CANCEL" />
          </button>
        </div>
        <div className={css(styles.loadContainer)}>
          <button className={css(styles.load)} onClick={this.props.load}>
            {this.props.loadingMore
            ? <div className={css(styles.spinner)} />
            : <img className={css(styles.icon)} src={more} alt="LOAD MORE" />}
          </button>
        </div>
        <div className={css(styles.confirmContainer)}>
          <button
            className={css(this.props.count ? styles.confirm : styles.confirmOff)}
            onClick={this.props.confirm}
          >
            {this.props.count > 0 && <span className={css(styles.count)}>({this.props.count})</span>}
            <img className={css(styles.icon)} src={select} alt="SELECT" />
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
  count: PropTypes.number.isRequired,
  cancel: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    marginTop: '0.35em',
    width: '100%',
  },
  spinner: {
    border: '0.3em solid transparent',
    borderTop: '0.3em solid white',
    borderRadius: '50%',
    width:'2em',
    height: '2em',
    animationName: [spin],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  count: {
    color: 'white',
    marginRight: '-0.5em',
    paddingLeft: '0.25em',
    fontSize: '130%',
  },
  icon: {
    width:'4.5em',
    height: '2.7em'
  },
  cancelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '1em',
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
    paddingRight: '1em',
    flex: 1,
  },
  cancel: {
    border: '2px solid #EF9A9A',
    borderRadius: '5em',
    cursor: 'pointer',
    backgroundColor: '#E57373',
    ':hover': { backgroundColor: '#EF9A9A' },
    ':active': { outline: 0, backgroundColor: '#EF9A9A' },
    ':focus': { outline: 0 },
  },
  load: {
    display: 'flex',
    justifyContent: 'center',
    border: '2px solid #64B5F6',
    borderRadius: '5em',
    cursor: 'pointer',
    backgroundColor: '#42A5F5',
    ':hover': { backgroundColor: '#64B5F6' },
    ':active': { outline: 0, backgroundColor: '#64B5F6' },
    ':focus': { outline: 0 },
  },
  confirm: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #81C784',
    backgroundColor: '#66BB6A',
    borderRadius: '5em',
    cursor: 'pointer',
    ':hover': { backgroundColor: '#81C784' },
    ':active': { outline: 0, backgroundColor: '#81C784' },
    ':focus': { outline: 0 },
  },
  confirmOff: {
    border: '2px solid #E0E0E0',
    borderRadius: '5em',
    backgroundColor: '#BDBDBD',
    ':active': { outline: 0 },
    ':focus': { outline: 0 },
  },
});
