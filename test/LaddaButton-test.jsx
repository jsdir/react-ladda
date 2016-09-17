import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import LaddaButton from '../src/LaddaButton.jsx'

describe('LaddaButton', () => {
  it.only('should render the Ladda button elements correctly', () => {
    const wrapper = render(<LaddaButton>child</LaddaButton>)
    const button = wrapper.find('button.ladda-button')
    expect(button).to.be.present()
    const label = button.find('span.ladda-label')
    expect(label).to.be.present()
    expect(label).to.have.text('child')
  })

  it('should pass data attributes down to the Ladda button', () => {
    // send all of the prop types and ensure that they exist
  })

  it('should not pass non-data attributes down to the Ladda button', () => {
    // send loading and progress and check that they are not
    // on the button
  })
})
