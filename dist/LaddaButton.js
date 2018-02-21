'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ladda = require('ladda');

var _ladda2 = _interopRequireDefault(_ladda);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};

var OMITTED_PROPS = ['loading', 'progress'];

var omit = function omit(data, keys) {
  var result = {};
  Object.keys(data).forEach(function (key) {
    if (keys.indexOf(key) === -1) {
      result[key] = data[key];
    }
  });

  return result;
};

var LaddaButton = function (_Component) {
  _inherits(LaddaButton, _Component);

  function LaddaButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LaddaButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LaddaButton.__proto__ || Object.getPrototypeOf(LaddaButton)).call.apply(_ref, [this].concat(args))), _this), _this.setNode = function (node) {
      _this.node = node;
    }, _this.updateLaddaInstance = function (props) {
      if (props.loading !== _this.props.loading) {
        if (props.loading) {
          _this.laddaInstance.start();
        } else if (props.disabled) {
          // .stop removes the attribute "disabled"
          // .disable calls .stop then adds the attribute "disabled"
          // see https://github.com/hakimel/Ladda/blob/master/js/ladda.js
          _this.laddaInstance.disable();
        } else {
          _this.laddaInstance.stop();
        }
      }

      if (props.progress !== _this.props.progress) {
        _this.laddaInstance.setProgress(props.progress);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LaddaButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.laddaInstance = _ladda2.default.create(this.node);

      if (this.props.loading) {
        this.laddaInstance.start();
      }

      if (!isUndefined(this.props.progress)) {
        this.laddaInstance.setProgress(this.props.progress);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateLaddaInstance(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.laddaInstance.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        _extends({}, omit(this.props, OMITTED_PROPS), {
          className: 'ladda-button ' + (this.props.className || ''),
          ref: this.setNode,
          disabled: this.props.disabled || this.props.loading
        }),
        _react2.default.createElement(
          'span',
          { className: 'ladda-label' },
          this.props.children
        )
      );
    }
  }]);

  return LaddaButton;
}(_react.Component);

LaddaButton.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  progress: _propTypes2.default.number,
  loading: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,

  // Ladda props
  // eslint-disable-next-line react/no-unused-prop-types
  'data-color': _propTypes2.default.string,
  // eslint-disable-next-line react/no-unused-prop-types
  'data-size': _propTypes2.default.oneOf(_constants.SIZES),
  // eslint-disable-next-line react/no-unused-prop-types
  'data-style': _propTypes2.default.oneOf(_constants.STYLES),
  // eslint-disable-next-line react/no-unused-prop-types
  'data-spinner-size': _propTypes2.default.number,
  // eslint-disable-next-line react/no-unused-prop-types
  'data-spinner-color': _propTypes2.default.string,
  // eslint-disable-next-line react/no-unused-prop-types
  'data-spinner-lines': _propTypes2.default.number
};
exports.default = LaddaButton;