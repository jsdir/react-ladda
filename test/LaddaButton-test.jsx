import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import LaddaButton from '../src/LaddaButton'
import { XL, SLIDE_UP } from '../src/constants'

describe('LaddaButton', () => {
  it('should render the Ladda button elements correctly', () => {
    const wrapper = render(<LaddaButton>child</LaddaButton>)
    const button = wrapper.find('button.ladda-button')
    expect(button).to.be.present()
    const label = button.find('span.ladda-label')
    expect(label).to.be.present()
    expect(label).to.have.text('child')
  })

  it('should pass data attributes down to the Ladda button', () => {
    const wrapper = render(
      <LaddaButton
        data-color="#eee"
        data-size={XL}
        data-style={SLIDE_UP}
        data-spinner-size={30}
        data-spinner-color="#ddd"
        data-spinner-lines={12}
      />
    )

    expect(wrapper).to.have.attr('data-color').equal('#eee')
    expect(wrapper).to.have.attr('data-size').equal(XL)
    expect(wrapper).to.have.attr('data-style').equal(SLIDE_UP)
    expect(wrapper).to.have.attr('data-spinner-size').equal('30')
    expect(wrapper).to.have.attr('data-spinner-color').equal('#ddd')
    expect(wrapper).to.have.attr('data-spinner-lines').equal('12')
  })

  it('should not pass non-data attributes down to the Ladda button', () => {
    const wrapper = render(
      <LaddaButton
        loading
        progress={0.5}
      />
    )

    expect(wrapper).to.not.have.attr('loading')
    expect(wrapper).to.not.have.attr('progress')
  })

  it('should combine classNames correctly', () => {
    const wrapper = render(
      <LaddaButton className="custom" />
    )

    expect(
      wrapper.find('button.ladda-button.custom')
    ).to.be.present()
  })
})
