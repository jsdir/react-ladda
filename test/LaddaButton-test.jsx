import React from 'react'
import { findDOMNode } from 'react-dom'
import { expect } from 'chai'
import { render, mount } from 'enzyme'
import sinon from 'sinon'
import Ladda from 'ladda'

import LaddaButton from '../src/LaddaButton'
import { XL, SLIDE_UP } from '../src/constants'

describe('LaddaButton', () => {
  it('should render the elements correctly', () => {
    // The correct markup that Ladda expects is defined here:
    // https://github.com/hakimel/Ladda#html
    const wrapper = mount(<LaddaButton>child</LaddaButton>)
    const button = wrapper.find('button.ladda-button')
    expect(button).to.be.present()
    const label = button.find('span.ladda-label')
    expect(label).to.be.present()
    expect(label).to.have.text('child')
  })

  it('should pass data attributes down to the button', () => {
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

  it('should not pass blacklisted props to the Ladda button', () => {
    const wrapper = mount(
      <LaddaButton
        loading
        progress={0.5}
      />
    )
    const button = wrapper.find('button')
    expect(button).to.not.have.prop('loading')
    expect(button).to.not.have.prop('progress')
  })

  it('should combine classNames correctly', () => {
    const wrapper = mount(
      <LaddaButton className="custom" />
    )

    expect(
      wrapper.find('button.ladda-button.custom')
    ).to.be.present()
  })

  it('should pass props down to the button', () => {
    const handler = () => {}
    const wrapper = mount(<LaddaButton onClick={handler} />)
    expect(wrapper.find('button')).prop('onClick').to.eq(handler)
  })

  it('should allow `loading` and `progress` to be changed in the same state update', () => {
    const wrapper = mount(<LaddaButton />)

    // Ladda depends on a set `offsetWidth` for calculations.
    const node = findDOMNode(wrapper.instance())
    node.offsetWidth = 200

    expect(wrapper.html()).not.to.contain('ladda-progress')
    wrapper.setProps({ loading: true, progress: 0.4 })
    expect(wrapper.html()).to.contain('ladda-progress')
  })

  it('should not disable the button if `props.loading` is falsey', () => {
    const wrapper = mount(<LaddaButton />)
    expect(wrapper.find('button').prop('disabled')).to.eq(undefined)
  })

  it('should disable the button if the `props.disabled` is set', () => {
    const wrapper = mount(<LaddaButton disabled />)
    expect(wrapper.find('button').prop('disabled')).to.eq(true)
  })

  it('should disable the button if `props.loading` is truthy', () => {
    const wrapper = mount(<LaddaButton loading />)
    expect(wrapper.find('button').prop('disabled')).to.eq(true)
  })

  it('should keep the attribute `disabled` after loading', () => {
    const wrapper = mount(<LaddaButton disabled />)
    expect(wrapper.find('button')).to.have.attr('disabled')
    wrapper.setProps({ loading: true })
    wrapper.setProps({ loading: false })
    expect(wrapper.find('button')).to.have.attr('disabled')
  })

  describe('ladda instance', () => {
    let createStub
    let laddaInstance

    beforeEach(() => {
      createStub = sinon.stub(Ladda, 'create')
      laddaInstance = {
        remove: sinon.spy(),
        setProgress: sinon.spy(),
        start: sinon.spy(),
        stop: sinon.spy(),
      }
      createStub.returns(laddaInstance)
    })

    afterEach(() => {
      createStub.restore()
    })

    it('should be maintained for the entire lifecycle of the component', () => {
      const wrapper = mount(<LaddaButton />)
      const node = findDOMNode(wrapper.instance())
      expect(createStub).to.have.been.calledWithExactly(node)
      wrapper.unmount()
      expect(laddaInstance.remove).to.have.been.calledWithExactly()
    })

    it('should receive setProgress call when progress is set', () => {
      const wrapper = mount(<LaddaButton />)
      expect(laddaInstance.setProgress).not.to.have.been.called

      wrapper.setProps({ progress: 0.5 })
      expect(laddaInstance.setProgress).to.have.been.calledWithExactly(0.5)
      laddaInstance.setProgress.reset()

      wrapper.setProps({ progress: 0.6 })
      expect(laddaInstance.setProgress).to.have.been.calledWithExactly(0.6)
      laddaInstance.setProgress.reset()

      wrapper.setProps({ progress: 0.6 })
      expect(laddaInstance.setProgress).not.to.have.been.called
    })

    it('should receive start and stop calls when loading is set', () => {
      const wrapper = mount(<LaddaButton />)
      expect(laddaInstance.stop).not.to.have.been.called
      expect(laddaInstance.start).not.to.have.been.called

      wrapper.setProps({ loading: true })
      expect(laddaInstance.start).to.have.been.calledWithExactly()
      laddaInstance.start.reset()

      wrapper.setProps({ loading: true })
      expect(laddaInstance.start).not.to.have.been.called

      wrapper.setProps({ loading: false })
      expect(laddaInstance.stop).to.have.been.calledWithExactly()
      laddaInstance.stop.reset()

      wrapper.setProps({ loading: false })
      expect(laddaInstance.stop).not.to.have.been.called
    })

    context('when `props.progress` is initially set', () => {
      beforeEach(() => {
        mount(<LaddaButton progress={0.3} />)
      })

      it('should receive a setProgress call ', () => {
        expect(laddaInstance.setProgress).to.have.been.calledWithExactly(0.3)
      })
    })

    context('when `props.loading` is initially set', () => {
      beforeEach(() => {
        mount(<LaddaButton loading />)
      })

      it('should receive a start call', () => {
        expect(laddaInstance.start).to.have.been.calledWithExactly()
      })
    })
  })
})
