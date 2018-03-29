import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const select = require('../../../assets/select_transparent.svg');

export default class GridImage extends Component {
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
        />
        {this.state.isSelected && <div className={css(styles.selected)}>
          <img className={css(styles.icon)} src={select} alt=""/>
        </div>}
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

GridImage.propTypes = {
  standard: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    cursor: 'pointer',
  },
  selected: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000044',
    pointerEvents: 'none',
    width: '12em',
    height: '12em',
    borderRadius: '0.5em'
  },
  icon: {
    width: '6em',
    height: '6em',
  },
  image: {
    width: '12em',
    height: '12em',
    borderRadius: '0.25em'
  },
});
