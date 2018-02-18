import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const imageSize = '15vw';

export default class GridImageTile extends Component {
  state = {
    isSelected: false,
  };

  onPhotoSelect = () => {
    this.props.onSelect(this.props.standard);
    this.setState((prevState) => { return { isSelected: !prevState.isSelected }; });
  };

  render() {
    return (
      <div className={css(styles.container)}>
        <div
          onClick={this.onPhotoSelect}
          className={css(this.state.isSelected ? styles.selected : null)}
        />
        <img
          onClick={this.onPhotoSelect}
          src={this.props.low}
          className={css(styles.image)}
          alt=""
        />
      </div>
    );
  }
}

GridImageTile.propTypes = {
  standard: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  selected: {
    position: 'absolute',
    backgroundColor: '#00C85333',
    borderColor: '#00C853',
    borderStyle: 'solid',
    borderWidth: '0.3vw',
    pointerEvents: 'none',
    width: imageSize,
    height: imageSize,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderColor: '#BDBDBD',
    borderStyle: 'solid',
    borderWidth: '0.3vw',
  },
});
