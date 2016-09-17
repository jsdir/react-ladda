import React, { Component, PropTypes } from 'react'
import Ladda from 'ladda'

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
  };

  componentDidMount() {
    this.laddaInstance = Ladda.create(this.node)

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

  setNode = (node) => {
    this.node = node
  }

  updateLaddaInstance = (props) => {
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
        {...omit(this.props, OMITTED_PROPS)}
        className={`ladda-button ${this.props.className || ''}`}
        ref={this.setNode}
      >
        <span className="ladda-label">
          {this.props.children}
        </span>
      </button>
    )
  }
}
