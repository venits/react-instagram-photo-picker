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
  show={true}
  accessToken={window.InstAuth.getAccessToken()}
/>
```

**InstagramPhotoPicker** will search for instagram **accessToken** in window.InstAuth.accessToken so make sure you are using [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module.

Prop **onPhotosPicked** will be called when user click **'Confirm'** button.

## Advanced Usages
You can create reference to **InstagramPhotoPicker** component and use some of cool methods.
```js
<InstagramPhotoPicker
  ref={ref => this.instaDialog = ref}
/>
```
*Available methods:*
1. showDialog()
2. hideDialog()
3. getInstagramImages()


## Summary

I hope that you will find this module useful, also if you have any problems or questions please let me know, I will be more than happy to help you :)

My email: tomasz.przybyl.it@gmail.com

