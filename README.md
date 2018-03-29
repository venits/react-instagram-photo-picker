﻿# React Instagram Photo Picker

Allow users to pick photos from their Instagram profile in easy way.

## Introduction

Implementing **Instagram API** may be difficult for some developers, that is why I have created this module.

It is *clear and fast way* to implement nice looking **(and working)** photo picker for Instagram photos in your React application.


## Requirements

First of all go to [Instagram Developer Console](https://www.instagram.com/developer/) and create your app.

After creating app go to: **Manage Clients -> Manage -> Security.**

*Some important notes:*
1. **Disable implicit OAuth** - must be unchecked, otherwise we will not be able to use Implicit flow!

2. **Valid redirect URIs** - To make thing easier I hardcoded endpoint that my module is using.

Just add **instagram_auth** to URI in which you will be using my module.

*For example your redirect URI can look like this: `http://localhost:3000/instagram_auth`.*

Also, save `clientID` because it will be needed in component.

![Demo](https://raw.githubusercontent.com/venits/instagram-web-oauth/master/instauth.png)

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
  clientId={instagram_client_id}
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

**InstagramPhotoPicker** will search for instagram `accessToken` in `window.InstAuth.accessToken` so make sure you are using [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module.


## Summary

I hope that you will find this module useful, also if you have any problems or questions please let me know, I will be more than happy to help you :)

My email: tomasz.przybyl.it@gmail.com

