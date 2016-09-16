import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Component from '../src/Component';

describe('A suite', function() {

  it('contains spec with an expectation', function() {
    expect(shallow(<Component />)
      .contains('Hello world!'))
      .to.equal(true);
  });
});
