import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    return (
      <p className={css(styles.dialogTitle)}>
        Hi,{' '}
        <strong className={css(styles.name)}>
          {this.props.name}
        </strong>
        . Choose photos to include in your experience.
      </p>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
};


const styles = StyleSheet.create({
  dialogTitle: {
    width: '100%',
    textAlign: 'center',
    color: '#888',
    backgroundColor: '#F5F5F5',
    paddingTop: '0.6vw',
    paddingBottom: '0.6vw',
    fontWeight: '600',
  },
  name: {
    color: '#2196F3',
  },
});
