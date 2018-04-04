# React Instagram Photo Picker

Allow users to pick photos from their Instagram profile in easy way.

## Introduction

Implementing **Instagram API** may be difficult for some developers, that is why I have created this module.

It is *clear and fast way* to implement nice looking **(and working)** photo picker for Instagram photos in your React application.

Component is using [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module for authorization.


## Requirements

First of all go to [Instagram Developer Console](https://www.instagram.com/developer/) and create your app.

After creating app go to: **Manage Clients -> Manage -> Security.**

*Some important notes:*
1. **Disable implicit OAuth** - must be unchecked, otherwise we will not be able to use Implicit flow!

2. **Valid redirect URIs** - add URI from where you are calling instagram authorization.

*For example your redirect URI can look like this: `http://localhost:3000/`.*

Also, save `clientID` because it will be needed in component.

![Demo](https://raw.githubusercontent.com/venits/instagram-web-oauth/master/instauth.png)

## Preview

![Preview](https://raw.githubusercontent.com/venits/react-instagram-photo-picker/master/preview.png)
![Preview](https://raw.githubusercontent.com/venits/react-instagram-photo-picker/master/preview2.png)

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

## Summary

I hope that you will find this module useful, also if you have any problems or questions please let me know, I will be more than happy to help you :)

My email: tomasz.przybyl.it@gmail.com

