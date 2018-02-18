import axios from 'axios';

class InstagramAPI {
  getUserMedia = (accessToken, count) => {
    return new Promise((resolve, reject) => {
      axios.get('https://api.instagram.com/v1/users/self/media/recent/', {
        params: {
          access_token: accessToken,
          count,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => reject(error));
    });
  };

  loadMorePhotos = (paginationUrl) => {
    return new Promise((resolve, reject) => {
      axios.get(paginationUrl)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => reject(error));
    });
  }
}

export default new InstagramAPI();
