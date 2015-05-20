var React = require('react/addons');

var LaddaButton = React.createClass({
  displayName: 'LaddaButton',
  mixins: [React.addons.PureRenderMixin],

  propTypes: {
    active: React.PropTypes.bool,
    progress: React.PropTypes.number,
    style: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    spinnerSize: React.PropTypes.number,
    spinnerColor: React.PropTypes.string,
    children: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return { style: 'expand-left' };
  },

  componentDidMount: function() {
    this.laddaButton = require('ladda/dist/ladda.min').create(this.getDOMNode());
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

    // skip if the button was initially disabled
    if (!this.props.active && this.props.children.props.disabled) {
      return;
    }

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
    var props = {className: 'ladda-button'};
    var laddaOptions = {
      style: 'data-style',
      color: 'data-color',
      size: 'data-size',
      spinnerSize: 'data-spinner-size',
      spinnerColor: 'data-spinner-color'
    };

    for (var prop in laddaOptions) {
      var dataAttr = laddaOptions[prop];
      if (this.props[prop]) {
        props[dataAttr] = this.props[prop];
      }
    }

    return React.addons.cloneWithProps(this.props.children, props);
  }
});

module.exports = LaddaButton;
