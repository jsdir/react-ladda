var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils')
var Ladda = require('ladda');

var LaddaButton = require('..');

sinon.spy(Ladda, 'create');

describe('LaddaButton', function() {

  beforeEach(function() {
    Ladda.create.reset();
    document.body.innerHTML = '';
  });

  function createButton(props) {
    return LaddaButton(props, React.DOM.button(null, 'Click here'));
  }

  function getElAttributes(button) {
    React.renderComponent(button, document.body);
    var el = Ladda.create.lastCall.args[0];
    return el.attributes;
  }

  it('should default to style "expand-left"', function() {
    var button = createButton({});
    var attributes = getElAttributes(button);
    attributes['data-style'].value.should.equal('expand-left');
  });

  it('should create a ladda button with correct attributes', function() {
    var button = createButton({
      active: true,
      progress: 0.5,
      color: '#eee',
      size: 'xl',
      spinnerSize: 30,
      spinnerColor: '#ddd',
      style: 'slide-up'
    });

    var attributes = getElAttributes(button);

    attributes['data-color'].value.should.equal('#eee');
    attributes['data-size'].value.should.equal('xl');
    attributes['data-style'].value.should.equal('slide-up');
    attributes['data-spinner-size'].value.should.equal('30');
    attributes['data-spinner-color'].value.should.equal('#ddd');
  });

  // TODO: it('should remove ladda button instance on unmount', function() {});
});
