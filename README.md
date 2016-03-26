# react-redux-modal ![Stability Experimental](http://img.shields.io/badge/stability-experimental-red.svg?style=flat)

> A [React](https://facebook.github.io/react/) modal connected to the [Redux](http://redux.js.org/) store.

## Credit

This implementation is primarily based off [this StackOverflow answer by Dan Abramov](http://stackoverflow.com/a/35641680).

## Features

- Stores the following information in the Redux store:
  - Whether the modal is visible (`isVisible`)
  - The modal type (`modalType`)
  - Data for the modal being rendered (`modalProps`)
  - Configuration object for customising the modal behavior (`settingsProps` which contain `shouldHideOnOverlayClick` and `shouldHideOnEscapeKeyDown`)
- Exposes class name hooks for styling of modal subcomponents
- Allows server-side rendering of the modal

## Example

```
$ git clone
$ npm install react redux react-redux
$ npm install
$ npm install --global gulp
$ gulp example --open
```

## Installation

Install via [npm](https://npmjs.com):

```
$ npm i --save @yuanqing/react-redux-modal
```

## Prior art

- [react-modal](https://github.com/reactjs/react-modal)

## License

[MIT](LICENSE.md)
