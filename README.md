react-ladda
===========

[![Build Status](https://img.shields.io/travis/jsdir/react-ladda.svg?style=flat)](https://travis-ci.org/jsdir/react-ladda)
[![Dependency Status](https://img.shields.io/david/jsdir/react-ladda.svg?style=flat)](https://david-dm.org/jsdir/react-ladda)
[![NPM version](https://img.shields.io/npm/v/react-ladda.svg?style=flat)](https://www.npmjs.org/package/react-ladda)
[![Code Climate](https://img.shields.io/codeclimate/github/jsdir/react-ladda.svg?style=flat)](https://codeclimate.com/github/jsdir/react-ladda)

A React wrapper for [Ladda buttons](https://github.com/hakimel/Ladda). [Example](https://github.com/jsdir/react-ladda/blob/master/example/README.md)

## Installation

`react-ladda` can be installed directly through npm:

```sh
$ npm install --save react-ladda
```

## Usage

`LaddaButton` is a React component that renders a [Ladda button](https://github.com/hakimel/Ladda). You can change the button's loading state and progress using the `loading` and `progress` props.

```jsx
import React, { Component } from 'react';

import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';

class App extends Component {

  state = { loading: false };

  toggle() {
    this.setState({
      loading: !this.state.loading,
      progress: 0.5,
    });
  }

  render() {
    return (
      <LaddaButton
        loading={this.state.loading}
        onClick={this.toggle}
        data-color="#eee"
        data-size={XL}
        data-style={SLIDE_UP}
        data-spinner-size={30}
        data-spinner-color="#ddd"
        data-spinner-lines={12}
      >
        Click Here!
      </LaddaButton>
    );
  }
};

ReactDOM.render(<App />, document.body);
```

Although this package doesn't include the styles for the Ladda buttons, there are many different ways to include them. The easiest way is to add the following tag to your document:

```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Ladda/1.0.0/ladda.min.css">
```

## Props

All of the native [Ladda button options](https://github.com/hakimel/Ladda#html) are supported through props:

Prop                 | Type      | Description
-------------------- | --------- | -----------
`loading`            | `boolean` | Displays the button's loading indicator
`progress`           | `number`  | Number from 0.0 to 1.0
`data-color`         | `string`  | Color applied to the button (eg. `#222`)
`data-size`          | `string`  | A [button size](#sizes)
`data-style`         | `string`  | A [button style](#styles)
`data-spinner-size`  | `number`  | Number representing the size of the spinner in pixels
`data-spinner-color` | `string`  | Color applied to the spinner (eg. `#eee`)
`data-spinner-lines` | `number`  | Number of spokes in the spinner

## Sizes and Styles

Ladda comes with a variety of different [sizes and styles](http://lab.hakim.se/ladda/) that you can use. Button sizes and styles can be directly imported from `react-ladda`:

```js
import LaddaButton, { XS, EXPAND_LEFT } from 'react-ladda'
```

### Sizes

- `XS`
- `S`
- `L`
- `XL`

### Styles

- `CONTRACT`
- `CONTRACT_OVERLAY`
- `EXPAND_LEFT`
- `EXPAND_RIGHT`
- `EXPAND_UP`
- `EXPAND_DOWN`
- `SLIDE_LEFT`
- `SLIDE_RIGHT`
- `SLIDE_UP`
- `SLIDE_DOWN`
- `ZOOM_IN`
- `ZOOM_OUT`

## Development

After cloning and running `npm install`, you can use the following `npm` commands for easier development:

Command         | Description
--------------- | -----------
`npm test`      | Runs the test suite
`npm run watch` | Runs the test suite and reruns when any source or test file changes
`npm run lint`  | Lints both the source and test files
`npm run build` | Compiles the source into ES5 and outputs the results into `dist`

_Contributions are more than welcome!_
