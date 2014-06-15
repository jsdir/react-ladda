react-ladda
===========

[![Build Status](https://travis-ci.org/jsdir/react-ladda.png)](https://travis-ci.org/jsdir/ladda) [![Dependency Status](https://david-dm.org/jsdir/react-ladda.svg)](https://david-dm.org/jsdir/react-ladda) [![NPM version](https://badge.fury.io/js/react-ladda.png)](http://badge.fury.io/js/react-ladda)

React wrapper for [Ladda buttons](https://github.com/hakimel/Ladda).

Installation
------------

Install the package:

```sh
$ npm install --save react-ladda
```

Install ladda using bower:

```sh
$ bower install --save ladda
```

Since react-ladda depends on ladda, we can require ladda with the [debowerify](https://github.com/eugeneware/debowerify) transform.

```sh
$ npm install --save-dev debowerify
```

Make sure to run the debowerify as a global transform so that ladda can be required by react-ladda. Browserify takes care of the rest.

```sh
$ cat source.js
var LaddaButton = require('react-ladda');
$ browserify -g debowerify source.js > compiled.js
```

Usage
-----

`LaddaButton` is a component that can be wrapped around any single button:

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

React.renderComponent(<App />, document.body);
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
