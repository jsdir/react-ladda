import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import Ladda from 'ladda'

class LaddaButton extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.laddaInstance = Ladda.create(findDOMNode(this))
  }

  componentWillUnmount() {
    this.laddaInstance.remove()
  }

  render() {
    return (
      <button
        {...this.props}
        className={`ladda-button ${this.props.className || ''}`}
      >
        <span className="ladda-label">
          {this.props.children}
        </span>
      </button>
    )
  }
}

export default LaddaButton
