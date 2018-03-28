# React Instagram Photo Picker

Allow users to pick photos from their Instagram profile in easy way.

## Introduction

Implementing **Instagram API** may be difficult for some developers, that is why I have created this module.

It is *clear and fast way* to implement nice looking **(and working)** photo picker for Instagram photos in your React application.


## Requirements

All you need is Instagram **access_token** that you receive after successful login to Instagram account.

Install [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module so you don't have to worry about authentication because this library will take care of it. 

## Preview

![Preview](https://raw.githubusercontent.com/venits/react-instagram-photo-picker/master/preview.png)

## Usage

Install module:
```js
npm i -s react-instagram-photo-picker
```
Import module:
```js
import InstagramPhotoPicker from 'react-instagram-photo-picker';
```
Add to your render method:
```js
<InstagramPhotoPicker
  onPhotosPicked={photos => console.warn(photos)}
  ref={ref => this.instaDialog = ref}
/>
```

To show dialog, simply call:
```js
this.instaDialog.showDialog();
// or if you want to hide:
this.instaDialog.hideDialog();
```
You can also get all downloaded images:
```js
this.instaDialog.getInstagramImages();
```

**InstagramPhotoPicker** will search for instagram **accessToken** in window.InstAuth.accessToken so make sure you are using [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module.

Prop **onPhotosPicked** will be called when user click **Confirm** button.


## Summary

I hope that you will find this module useful, also if you have any problems or questions please let me know, I will be more than happy to help you :)

My email: tomasz.przybyl.it@gmail.com

