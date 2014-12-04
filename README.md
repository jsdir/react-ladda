react-ladda
===========

[![Build Status](https://img.shields.io/travis/jsdir/react-ladda.svg?style=flat)](https://travis-ci.org/jsdir/react-ladda) [![Dependency Status](https://img.shields.io/david/jsdir/react-ladda.svg?style=flat)](https://david-dm.org/jsdir/react-ladda) [![NPM version](https://img.shields.io/npm/v/react-ladda.svg?style=flat)](https://www.npmjs.org/package/react-ladda) [![Code Climate](https://img.shields.io/codeclimate/github/jsdir/react-ladda.svg?style=flat)](https://codeclimate.com/github/jsdir/react-ladda)

React wrapper for [Ladda buttons](https://github.com/hakimel/Ladda).

Installation
------------

`react-ladda` can be installed directly through npm:

```sh
$ npm install --save react-ladda
```

Usage
-----

`LaddaButton` is a component that can be wrapped around a button DOM element:

```js
/** @jsx React.DOM */

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
      <LaddaButton active={this.state.active}>
        <button onClick={this.toggle}>Click here</button>
      </LaddaButton>
    );
  }
});

React.render(<App />, document.body);
```

All of the options for ladda buttons are supported:

```js
<LaddaButton
    active={true}
    progress={0.5}
    color="#eee"
    size="xl"
    spinnerSize={30}
    spinnerColor="#ddd"
    style="slide-up">
  <button>Click here</button>
</LaddaButton>
```
