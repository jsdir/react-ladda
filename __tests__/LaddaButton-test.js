jest.dontMock('..');

var React = require('react');
var ReactDOM = require('react-dom');
var Ladda = require('ladda/dist/ladda.min');

var LaddaButton = React.createFactory(require('..'));

var TestUtils = require('react-addons-test-utils');
Ladda.create = jest.genMockFunction();

describe('LaddaButton', function() {
  function createRenderedButton(props) {
    var el = LaddaButton(props, 'Click here');
    return TestUtils.renderIntoDocument(el);
  }

  it('should default to style "expand-left"', function() {
    var button = createRenderedButton({});
    var node = ReactDOM.findDOMNode(button);
    expect(node.getAttribute('data-style')).toBe('expand-left');
  });

  it('should create a ladda button with correct attributes', function() {
    var button = createRenderedButton({
      loading: true,
      progress: 0.5,
      buttonColor: '#eee',
      buttonSize: 'xl',
      spinnerSize: 30,
      spinnerColor: '#ddd',
      buttonStyle: 'slide-up'
    });

    var node = ReactDOM.findDOMNode(button);
    expect(node.getAttribute('data-color')).toBe('#eee');
    expect(node.getAttribute('data-size')).toBe('xl');
    expect(node.getAttribute('data-style')).toBe('slide-up');
    expect(node.getAttribute('data-spinner-size')).toBe('30');
    expect(node.getAttribute('data-spinner-color')).toBe('#ddd');
  });

  it('should trigger "onClick" event', function() {
    var onClick = jest.genMockFunction();
    var button = createRenderedButton({onClick: onClick});
    TestUtils.Simulate.click(ReactDOM.findDOMNode(button));
    expect(onClick.mock.calls.length).toBe(1);
  });

  it('should inherit className from props', function() {
    var el = LaddaButton({
      className: 'buttonClass'
    }, 'Click here');
    var node = TestUtils.renderIntoDocument(el);
    var className = ReactDOM.findDOMNode(node).getAttribute('class');
    expect(className).toBe('ladda-button buttonClass');
  });

  it('should work after multiple ReactDOM.render invocations', function() {
    var buttonContainer = React.DOM.div(null, LaddaButton());
    var div = document.createElement('div');
    ReactDOM.render(buttonContainer, div);
    ReactDOM.render(buttonContainer, div);
    jest.runAllTimers();
    expect(div.innerHTML).toMatch(/ladda-label/);
    expect(div.innerHTML).toMatch(/ladda-spinner/);
  });
});
