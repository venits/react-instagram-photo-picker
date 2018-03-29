import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import States from './states';
import InstagramAPI from './api/InstagramAPI';
import LoginToInstagram from './screens/LoginToInstagram';
import Loading from './components/Loading';
import NoPhotos from './screens/NoPhotos';
import PhotoPicker from './screens/PhotoPicker';

export default class InstagramPhotoPicker extends Component {
  state = {
    showDialog: false,
    instagramImages: [],
    isDownloadingImages: false,
    paginationUrl: '',
    clientId: this.props.clientId,
  };

  asdasdasdasdsaddas() {
    if(!window.InstAuth) {
      const ig = document.createElement('script');
      ig.type = 'text/javascript';
      ig.async = true;
      ig.src = 'https://instagram-web-auth.firebaseapp.com/instauth.min.js';
      ig.onload = () => {
        if(window.InstAuth) {
          window.InstAuth.init(this.state.clientId);
        }
      };
      const s = document.getElementsByTagName('head')[0];
      s.parentNode.insertBefore(ig, s);
    }
  }

  showDialog = () => {
    if(window.InstAuth) {
      this.setState({ showDialog: true });
      this.checkIfNeedToDownload();
    } else {
      console.error('Instagram authorization module is not present.');
    }
  };

  hideDialog = () => {
    this.setState({ showDialog: false });
  };

  checkIfNeedToDownload = () => {
    if (window.InstAuth.accessToken && this.state.instagramImages.length === 0) {
      this.setState({ isDownloadingImages: true });
      InstagramAPI.getUserMedia(window.InstAuth.accessToken, 6)
        .then((images) => {
          this.setState({
            instagramImages: images.data,
            isDownloadingImages: false,
            paginationUrl: images.pagination
              ? images.pagination.next_url
              : null,
          });
        })
        .catch((error) => {
          console.error(error);
          this.setState({ isDownloadingImages: false });
        });
    }
  };

  onNewPhotosLoaded = (newPhotos = [], paginationUrl = '') => {
    this.setState((prevState) => {
      return { paginationUrl, instagramImages: [...prevState.instagramImages, ...newPhotos] };
    });
  };

  getInstagramImages = () => this.state.instagramImages;

  onFocusLost = (event) => {
    if (event.target === this.dialog) this.hideDialog();
  };

  calculateModuleState = () => {
    return window.InstAuth.accessToken
      ? !this.state.isDownloadingImages
        ? this.state.instagramImages.length > 0
          ? States.PHOTO_PICKER
          : States.NO_INSTAGRAM_PHOTOS
        : States.APP_IS_LOADING
      : States.LOGIN_TO_INSTAGRAM;
  };

  render() {
    if (this.state.showDialog) {
      switch (this.calculateModuleState()) {
        case States.PHOTO_PICKER:
          this.body = (<PhotoPicker
            photos={this.state.instagramImages}
            cancel={this.hideDialog}
            confirm={this.props.onPhotosPicked}
            pagination={this.state.paginationUrl}
            loadMore={this.onNewPhotosLoaded}
          />);
          break;
        case States.NO_INSTAGRAM_PHOTOS:
          this.body = <NoPhotos reload={this.checkIfNeedToDownload} />;
          break;
        case States.LOGIN_TO_INSTAGRAM:
          this.body = <LoginToInstagram success={this.checkIfNeedToDownload} />;
          break;
        default:
          this.body = <Loading/>;
      }

      return (
        <div
          ref={(ref) => { this.dialog = ref; }}
          className={css(styles.dialog)}
          onClick={this.onFocusLost}
        >
          {this.body}
        </div>
      );
    }
    return null;
  }
}

InstagramPhotoPicker.propTypes = {
  clientId: PropTypes.string.isRequired,
  onPhotosPicked: PropTypes.func,
};

InstagramPhotoPicker.defaultProps = {
  onPhotosPicked: () => {},
};

const styles = StyleSheet.create({
  dialog: {
    position: 'fixed',
    display: 'flex',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000055',
  },
});
