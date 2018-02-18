import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import GapFiller from './GapFiller/GapFiller';

const gridGap = '0.75vw';
const padding = '0.5vw';

export default class PhotoGrid extends Component {
  render() {
    const gapFillers = [];
    const gapsToAdd = this.props.photos.length % 3 > 0 ? (3 - (this.props.photos.length % 3)) : 0;
    for (let i = 0; i < gapsToAdd; i++) {
      gapFillers.push(<GapFiller key={i} />);
    }

    return (
      <div className={css(styles.wrapper)}>
        {this.props.photos}
        {gapFillers}
      </div>
    );
  }
}

PhotoGrid.propTypes = {
  photos: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'grid',
    padding,
    paddingTop: '0vw',
    backgroundColor: '#F5F5F5',
    gridTemplateColumns: 'repeat(3, 0fr)',
    gridGap,
    overflow: 'scroll',
    maxHeight: '38vw',
  },
});
