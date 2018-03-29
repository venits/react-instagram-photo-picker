import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default class Grid extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        {this.props.photos}
      </div>
    );
  }
}

Grid.propTypes = {
  photos: PropTypes.array.isRequired,
  pickedCount: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 0fr)',
    backgroundColor: 'white',
    borderRadius: '0.5em',
    padding: '0.75em',
    gridGap: '1em',
    overflow: 'scroll',
    maxHeight: '30em',
  },
});
