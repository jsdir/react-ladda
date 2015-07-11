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

- Use `react-ladda@>=2.0.2` for `react@0.13`
- Use `react-ladda@<2.0.2` for `react@0.12`

Usage
-----

`LaddaButton` is a React component that wraps [Ladda buttons](https://github.com/hakimel/Ladda) with additional props for the built-in loading indicators:

```js
React = require('react');
LaddaButton = require('react-ladda');

App = React.createClass({
  displayName: 'App',

  getInitialState: function() {
    return {active: false};
  },

  toggle: function() {
    this.setState({active: !this.state.active});
  },

  render: function() {
    return (
      <LaddaButton active={this.state.active} progress={.5} onClick={this.toggle}>
        Click here
      </LaddaButton>
    );
  }
});

React.render(<App />, document.body);
```

All of the Ladda button options are supported through props:

```js
<LaddaButton
    active={true}
    progress={0.5}
    buttonColor="#eee"
    buttonSize="xl"
    buttonStyle="slide-up"
    spinnerSize={30}
    spinnerColor="#ddd">Click here</LaddaButton>
```
