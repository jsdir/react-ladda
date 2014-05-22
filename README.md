react-ladda
===========

React wrapper for [Ladda buttons](https://github.com/hakimel/Ladda).

```js
/** @jsx React.DOM */

React = require('react');
LaddaButton = require('react-ladda');

App = React.createClass({
  displayName: 'App',

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

react-ladda supports all options for ladda buttons:

```js
<LaddaButton
    active={true}
    progress={0.5}
    color="#eee"
    size="xl"
    spinnerSize={30}
    spinnerColor="#ddd">
  <button>Click here</button>
</LaddaButton>
```
