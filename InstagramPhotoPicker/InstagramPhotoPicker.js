import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import ModuleStates from './ModuleStates/ModuleStates';
import InstagramAPI from './InstagramAPI/InstagramAPI';
import LoginToInstagram from './LoginToInstagram/LoginToInstagram';
import Loading from './Loading/Loading';
import NoPhotos from './NoPhotos/NoPhotos';
import PhotoPicker from './PhotoPicker/PhotoPicker';

const numberOfPhotosToDownloadOnFirst = 6;

export default class InstagramPhotoPicker extends Component {
  state = {
    showDialog: this.props.show,
    accessToken: this.props.accessToken,
    instagramImages: [],
    isDownloadingImages: true,
    paginationUrl: '',
  };

  componentDidMount() {
    this.checkIfNeedToDownload(this.state.accessToken);
  }

  componentWillReceiveProps(nextProps) {
    this.checkIfNeedToDownload(nextProps.accessToken);
    this.setState({ showDialog: nextProps.show || false, accessToken: nextProps.accessToken });
  }

  showDialog = (accessToken) => {
    this.checkIfNeedToDownload(accessToken);
    this.setState({ showDialog: true, accessToken });
  };

  hideDialog = () => {
    this.setState({ showDialog: false });
  };

  checkIfNeedToDownload = (accessToken = this.state.accessToken) => {
    if (accessToken && this.state.instagramImages.length <= 0) {
      InstagramAPI.getUserMedia(accessToken, numberOfPhotosToDownloadOnFirst)
        .then((images) => {
          this.setState({
            instagramImages: images.data,
            accessToken,
            isDownloadingImages: false,
            paginationUrl: images.pagination ? images.pagination.next_url : null,
          });
        })
        .catch((error) => { console.error(error); this.setState({ isDownloadingImages: false }); });
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
    return this.state.accessToken
      ? !this.state.isDownloadingImages
        ? this.state.instagramImages.length > 0
          ? ModuleStates.PHOTO_PICKER
          : ModuleStates.NO_INSTAGRAM_PHOTOS
        : ModuleStates.APP_IS_LOADING
      : ModuleStates.LOGIN_TO_INSTAGRAM;
  };

  render() {
    if (this.state.showDialog) {
      switch (this.calculateModuleState()) {
        case ModuleStates.PHOTO_PICKER:
          this.body = (<PhotoPicker
            photos={this.state.instagramImages}
            cancel={this.hideDialog}
            confirm={this.props.onPhotosPicked}
            pagination={this.state.paginationUrl}
            loadMore={this.onNewPhotosLoaded}
          />);
          break;
        case ModuleStates.NO_INSTAGRAM_PHOTOS:
          this.body = <NoPhotos reload={this.checkIfNeedToDownload} />;
          break;
        case ModuleStates.LOGIN_TO_INSTAGRAM:
          this.body = <LoginToInstagram success={this.checkIfNeedToDownload} />;
          break;
        default:
          this.body = <Loading />;
      }
      return (
        <div
          ref={(ref) => { this.dialog = ref; }}
          className={css(styles.dialog)}
          onClick={this.onFocusLost}
        >
          { this.body }
        </div>
      );
    }
    return null;
  }
}

InstagramPhotoPicker.propTypes = {
  onPhotosPicked: PropTypes.func,
  accessToken: PropTypes.string,
  show: PropTypes.bool,
};

InstagramPhotoPicker.defaultProps = {
  onPhotosPicked: () => {},
  accessToken: null,
  show: false,
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
    backgroundColor: '#00000066',
  },
});
