import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import LaddaButton from '../src'

describe('LaddaButton', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<LaddaButton />)
      .contains('Hello world!'))
      .to.equal(true)
  })
})
