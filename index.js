React = require('react');
shallowEqual = require('react/lib/shallowEqual');
cloneWithProps = require('react/lib/cloneWithProps');
Ladda = require('ladda');

LaddaButton = React.createClass({
  displayName: 'LaddaButton',

  propTypes: {
    active: React.PropTypes.bool,
    progress: React.PropTypes.number,
    style: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    spinnerSize: React.PropTypes.number,
    spinnerColor: React.PropTypes.string,
    children: React.PropTypes.renderable.isRequired
  },

  getDefaultProps: function() {
    return { style: 'expand-left' };
  },

  componentDidMount: function() {
    this.laddaButton = Ladda.create(this.getDOMNode());
  },

  componentWillUnmount: function() {
    if (this.laddaButton.remove) {
      this.laddaButton.remove();
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps);
  },

  componentDidUpdate: function() {
    if (this.props.active) {
      if (!this.active) {
        this.active = true;
        this.laddaButton.start();
      }
    } else {
      this.active = false;
      this.laddaButton.stop();
    }
    if (this.props.progress) {
      this.laddaButton.setProgress(this.props.progress);
    }
  },

  render: function() {
    var props = {};
    var options = {
      style: 'data-style',
      color: 'data-color',
      size: 'data-size',
      spinnerSize: 'data-spinner-size',
      spinnerColor: 'data-spinner-color'
    };

    for (prop in options) {
      var dataAttr = options[prop];
      if (this.props[prop]) {
        props[dataAttr] = this.props[prop];
      }
    }

    // Set ladda className.
    var laddaClass = 'ladda-button';
    if (props.className) {
      props.className += (' ' + laddaClass);
    } else {
      props.className = laddaClass;
    }

    return cloneWithProps(this.props.children, props);
  }
});

module.exports = LaddaButton;
