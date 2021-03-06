# Ionic app files for the Funkflex app using AppPresser 3

Forked from [AppPresser 3](https://github.com/apppresser/ap3)

These are the files used to compile mobile apps using [AppPresser](https://apppresser.com). They are based on [Ionic 3](http://ionicframework.com/), and use Angular 6 and Typescript.

This repository is for developers using AppPresser who want to make a lot of custom changes. If you make changes to these files, you cannot use the app builder, because it will overwrite your changes.

If you are not familiar with the command line, Angular 6, and Typescript, we recommend using our visual app builder instead of editing these files.

## Usage

First, make sure you have node and npm installed.

1. Clone this repository, cd into the directory `cd appp-funkflex`, and run `npm install`.
2. Install the [Ionic CLI tools](http://ionicframework.com/docs/v2/cli/) 

`sudo npm install -g ionic`

3. Run `npm run serve` to preview the app in your browser

Consult the [Ionic documentation](https://ionicframework.com/docs/cli/) for cli commands, custom components, and more.

## Update notes after updating Ionic

delete node_modules folder

npm install ionic-angular@latest --save
npm install @ionic/app-scripts@latest --save-dev
npm install -g cordova

npm install

cordova platform rm ios
ionic cordova platform add ios
ionic cordova plugin remove cordova-plugin-console
ionic cordova plugin rm cordova-plugin-statusbar
ionic cordova plugin add https://github.com/apache/cordova-plugin-statusbar.git

## Possible issues

If cordova and/or ionic is not updated properly, you will get build errors.

Also, prod builds might see issues because of a webpack update https://github.com/ionic-team/ionic-app-scripts/releases/tag/v3.0.0

## Build development app for Phonegap

1. Run `npm run build`
2. Copy the www/build/* folder to phonegap/funkmaster-flex/build/
3. Zip the funkmaster-flex folder
4. Upload funkmaster-flex.zip to https://build.phonegap.com/
5. Scan the QR code to install on your device.

## Build production app for Phonegap

1. Run `npm run build --prod`
2. Copy the www/build/* folder to phonegap/funkmaster-flex/build/
3. Zip the funkmaster-flex folder
4. Upload funkmaster-flex.zip to https://build.phonegap.com/
5. Scan the QR code to install on your device.