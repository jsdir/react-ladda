import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Ladda from 'ladda'

import { SIZES, STYLES } from './constants'

const isUndefined = value => typeof value === 'undefined'

const OMITTED_PROPS = [
  'loading',
  'progress',
]

const omit = (data, keys) => {
  const result = {}
  Object.keys(data).forEach((key) => {
    if (keys.indexOf(key) === -1) {
      result[key] = data[key]
    }
  })

  return result
}

export default
class LaddaButton extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    progress: PropTypes.number,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,

    // Ladda props
    // eslint-disable-next-line react/no-unused-prop-types
    'data-color': PropTypes.oneOf(['green', 'red', 'blue', 'purple', 'mint']),
    // eslint-disable-next-line react/no-unused-prop-types
    'data-size': PropTypes.oneOf(SIZES),
    // eslint-disable-next-line react/no-unused-prop-types
    'data-style': PropTypes.oneOf(STYLES),
    // eslint-disable-next-line react/no-unused-prop-types
    'data-spinner-size': PropTypes.number,
    // eslint-disable-next-line react/no-unused-prop-types
    'data-spinner-color': PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    'data-spinner-lines': PropTypes.number,
  };

  componentDidMount() {
    this.laddaInstance = Ladda.create(this.node)

    if (this.props.loading) {
      this.laddaInstance.start()
    }

    if (!isUndefined(this.props.progress)) {
      this.laddaInstance.setProgress(this.props.progress)
    }
  }

  shouldComponentUpdate(nextProps) {
    this.updateLaddaInstance(nextProps)
  }

  componentWillUnmount() {
    this.laddaInstance.remove()
  }

  setNode = (node) => {
    this.node = node
  }

  updateLaddaInstance = (props) => {
    if (props.loading !== this.props.loading) {
      if (props.loading) {
        this.laddaInstance.start()
      } else if (props.disabled) {
        // .stop removes the attribute "disabled"
        // .disable calls .stop then adds the attribute "disabled"
        // see https://github.com/hakimel/Ladda/blob/master/js/ladda.js
        this.laddaInstance.disable()
      } else {
        this.laddaInstance.stop()
      }
    }

    if (props.progress !== this.props.progress) {
      this.laddaInstance.setProgress(props.progress)
    }
  }

  render() {
    return (
      <button
        {...omit(this.props, OMITTED_PROPS)}
        className={`ladda-button ${this.props.className || ''}`}
        ref={this.setNode}
        disabled={this.props.disabled || this.props.loading}
      >
        <span className="ladda-label">
          {this.props.children}
        </span>
      </button>
    )
  }
}
