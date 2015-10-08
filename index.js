var React = require('react');
var findDOMNode = require('react-dom').findDOMNode;
var PureRenderMixin = require('react-addons-pure-render-mixin');

var laddaOptions = {
  buttonStyle: 'data-style',
  buttonColor: 'data-color',
  buttonSize: 'data-size',
  spinnerSize: 'data-spinner-size',
  spinnerColor: 'data-spinner-color'
};

var LaddaButton = React.createClass({
  displayName: 'LaddaButton',
  
  mixins: [PureRenderMixin],

  propTypes: {
    loading: React.PropTypes.bool,
    progress: React.PropTypes.number,
    buttonStyle: React.PropTypes.string,
    buttonColor: React.PropTypes.string,
    buttonSize: React.PropTypes.string,
    spinnerSize: React.PropTypes.number,
    spinnerColor: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      loading: false,
      buttonStyle: 'expand-left'
    };
  },

  componentDidMount: function() {
    this.laddaButton = require('ladda/dist/ladda.min')
      .create(findDOMNode(this));
  },

  componentWillUnmount: function() {
    if (this.laddaButton.remove) {
      this.laddaButton.remove();
    }
  },

  componentDidUpdate: function() {
    if (!this.laddaButton) {
      return;
    }

    // Skip if the button was initially disabled.
    if (!this.props.loading && this.props.disabled) {
      return;
    }

    if (this.props.loading && !this.laddaButton.isLoading()) {
      this.laddaButton.start();
    } else if (!this.props.loading && this.laddaButton.isLoading()){
      this.laddaButton.stop();
    }

    if (typeof this.props.progress !== 'undefined') {
      this.laddaButton.setProgress(this.props.progress);
    }
  },

  render: function() {
    var props = {};
    for (var prop in this.props) {
      props[laddaOptions[prop] || prop] = this.props[prop];
    }

    // Add the ladda-button class to the button.
    props.className = 'ladda-button ' + (props.className || '');

    return React.DOM.button(props,
      React.DOM.span({className: 'ladda-label'}, this.props.children),
      React.DOM.span({className: 'ladda-spinner'})
    );
  }
});

module.exports = LaddaButton;
