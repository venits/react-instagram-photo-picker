import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Loading extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.spinner)} />
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
    paddingLeft: '1em',
    paddingRight: '1em',
    borderRadius: '0.5em',
    backgroundColor: 'white',
  },
  spinner: {
    border: '0.5em solid #BBDEFB',
    borderTop: '0.5em solid #2196F3',
    borderRadius: '50%',
    width: '4em',
    margin: '3em 2em 3em 2em',
    height: '4em',
    animationName: [spin],
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});
