import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import Ladda from 'ladda'

const isUndefined = value => typeof value === 'undefined'

class LaddaButton extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    progress: PropTypes.number,
    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.laddaInstance = Ladda.create(findDOMNode(this))

    if (!isUndefined(this.props.progress)) {
      this.laddaInstance.setProgress(this.props.progress)
    }

    if (this.props.loading) {
      this.laddaInstance.start()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateLaddaInstance(nextProps)
  }

  componentWillUnmount() {
    this.laddaInstance.remove()
  }

  updateLaddaInstance = props => {
    if (props.progress !== this.props.progress) {
      this.laddaInstance.setProgress(props.progress)
    }

    if (props.loading !== this.props.loading) {
      if (props.loading) {
        this.laddaInstance.start()
      } else {
        this.laddaInstance.stop()
      }
    }
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
