react-ladda
===========

[![Build Status](https://img.shields.io/travis/jsdir/react-ladda.svg?style=flat)](https://travis-ci.org/jsdir/react-ladda)
[![Dependency Status](https://img.shields.io/david/jsdir/react-ladda.svg?style=flat)](https://david-dm.org/jsdir/react-ladda)
[![NPM version](https://img.shields.io/npm/v/react-ladda.svg?style=flat)](https://www.npmjs.org/package/react-ladda)
[![Code Climate](https://img.shields.io/codeclimate/github/jsdir/react-ladda.svg?style=flat)](https://codeclimate.com/github/jsdir/react-ladda)

React wrapper for [Ladda buttons](https://github.com/hakimel/Ladda).

Installation
------------

`react-ladda` can be installed directly through npm:

```sh
$ npm install --save react-ladda
```

Compatibility
-------------

`react-ladda` version | `react` version
--------------------- | ---------------
`>=4.0.0`             | `0.14.x`
`>=2.0.2 <4.0.0`      | `0.13.x`
`< 2.0.2`             | `0.12.x`

Usage
-----

`LaddaButton` is a React component that wraps [Ladda buttons](https://github.com/hakimel/Ladda) with additional props for the built-in loading indicators:

```jsx
React = require('react');
ReactDOM = require('react-dom');
LaddaButton = require('react-ladda');

App = React.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {loading: false};
  },

  toggle: function() {
    this.setState({loading: !this.state.loading});
  },

  render: function() {
    return (
      <LaddaButton loading={this.state.loading} progress={.5} onClick={this.toggle}>
        Click here
      </LaddaButton>
    );
  }
});

ReactDOM.render(<App />, document.body);
```

All of the Ladda button options are supported through props:

```jsx
<LaddaButton
    loading={true}
    progress={0.5}
    buttonColor="#eee"
    buttonSize="xl"
    buttonStyle="slide-up"
    spinnerSize={30}
    spinnerColor="#ddd">Click here</LaddaButton>
```
