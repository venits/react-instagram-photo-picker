# React Instagram Photo Picker

Allow your users to pick photos from their Instagram profile in easy way.

## Introduction

Implementing **Instagram API** may be difficult for some developers, that is why I have created this module.

It is *clear and fast way* to implement nice looking **(and working)** photo picker for Instagram photos in your React application.

After successful login, user can pick images and you as developer will receive **an array of photos URL**.


## Requirements

All you need is Instagram **access_token** that you receive after successful login to Instagram account.

If you install [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module you don't have to worry about authentication because my library will take care of it. 

**It is also mine module so I can ensure you that it works ;)**

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
Initially you want to set **show** prop to **false**. Later when user clicks for example *'Pick photo from Instagram'* you can change it to **true**.

Ass you can see here I am using **window.InstAuth.getAccessToken()**. 
You will get that after you install [instagram-web-oauth](https://github.com/venits/instagram-web-oauth) module.

**You don't have to worry if access_token is null or undefined, my module will take care of that and display button 'Login to Instagram' first of all.**

You can notice **onPhotosPicked** prop which will be our callback for action when user clicks **'Confirm'** button. We will receive an array or URLs in response.

## Advanced Usages
You can create reference to **InstagramPhotoPicker** component and use some of cool methods.
```js
<InstagramPhotoPicker
	ref={ref => {this.instaDialog = ref;}}
/>
```
*Available methods:*
1. showDialog()
2. hideDialog()
3. getInstagramImages()


## Summary

I hope that you will find this module useful, also if you have any problems or questions please let me know, I will be more than happy to help you :)

My email: tomasz.przybyl.it@gmail.com

