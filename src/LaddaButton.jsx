import React, { PropTypes } from 'react'

const LaddaButton = props => (
  <button
    {...props}
    className={`ladda-button ${props.className || ''}`}
  >
    <span className="ladda-label">
      {props.children}
    </span>
  </button>
)

LaddaButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default LaddaButton
