import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Title from './Title/Title';
import GridImage from './GridImage/GridImage';
import PickedPhotosCounter from './PickedPhotosCounter/PickedPhotosCounter';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import ButtonsPanel from './ButtonsPanel/ButtonsPanel';
import InstagramAPI from '../InstagramAPI/InstagramAPI';

export default class PhotoPicker extends Component {
  state = {
    pickedPhotos: [],
    instagramUserName: '',
    instagramPhotos: [],
    isLoadingMore: false,
  };

  componentWillMount() {
    this.setState({
      instagramPhotos: this.createArrayOfInstagramPhotos(this.props.photos),
      instagramUserName: this.props.photos[0] ? this.props.photos[0].user.full_name || '' : '',
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoadingMore: false,
      instagramPhotos: this.createArrayOfInstagramPhotos(nextProps.photos)
    });
  }

  selectImage = (url) => {
    if (this.state.pickedPhotos.filter(item => item === url).length > 0) {
      this.setState((prevState) => {
        return { pickedPhotos: prevState.pickedPhotos.filter(item => item !== url) };
      });
    } else {
      this.setState((prevState) => {
        return { pickedPhotos: [...prevState.pickedPhotos, url] };
      });
    }
  };

  createArrayOfInstagramPhotos = (imagesData) => {
    return imagesData.map(child =>
      (<GridImage
        onSelect={this.selectImage}
        key={child.images.standard_resolution.url}
        standard={child.images.standard_resolution.url}
        low={child.images.low_resolution.url}
      />));
  };

  appendToArrayOfInstagramPhotos = (imagesData, paginationUrl) => {
    this.props.loadMore(imagesData, paginationUrl);
  };

  loadMorePictures = () => {
    this.setState({ isLoadingMore: true });
    InstagramAPI.loadMorePhotos(this.props.pagination)
      .then((images) => {
        this.appendToArrayOfInstagramPhotos(images.data, images.pagination.next_url);
      })
      .catch(() => {
        this.setState({ isLoadingMore: false });
        console.error('Instagram', 'There are no more photos left.');
      });
  };

  confirmSelect = () => {
    if (this.state.pickedPhotos.length > 0) {
      this.props.confirm(this.state.pickedPhotos);
      this.props.cancel();
    }
  };

  render() {
    return (
      <div className={css(styles.container)}>
        <Title name={this.state.instagramUserName} />
        <PickedPhotosCounter count={this.state.pickedPhotos.length} />
        <PhotoGrid photos={this.state.instagramPhotos} />
        <ButtonsPanel
          count={this.state.pickedPhotos.length > 0}
          cancel={this.props.cancel}
          loadingMore={this.state.isLoadingMore}
          load={this.loadMorePictures}
          confirm={this.confirmSelect}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    borderRadius: '2%',
    backgroundColor: 'white',
  },
});

PhotoPicker.propTypes = {
  confirm: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  cancel: PropTypes.func.isRequired,
  pagination: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};
