import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const imageSize = '15vw';
const visibilityOff = require('./visibility_off.svg');

export default class GapFiller extends Component {
  render() {
    return (
      <div className={css(styles.filler)}>
        <img src={visibilityOff} alt="" className={css(styles.icon)} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  filler: {
    width: imageSize,
    height: imageSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BDBDBD',
    borderStyle: 'dashed',
    borderWidth: '0.3vw',
  },
  icon: {
    width: '4vw', height: '4vw',
  },
});
