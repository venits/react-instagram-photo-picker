import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default class PickedPhotosCounter extends Component {
  render() {
    return (
      <p className={css(styles.counter)}>Photos picked:{' '}
        <strong className={css(this.props.count > 0 ? styles.ok : styles.error)}>
          {this.props.count}
        </strong>
      </p>
    );
  }
}

PickedPhotosCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  counter: {
    padding: '0.5vw',
    margin: 0,
    backgroundColor: '#F5F5F5',
    paddingLeft: '0.5vw',
    color: '#9E9E9E',
    fontSize: '90%',
    fontWeight: '600',
  },
  error: {
    color: '#FF5252',
  },
  ok: {
    color: '#8BC34A',
  }
});
