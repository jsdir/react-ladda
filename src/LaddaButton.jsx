import React, { PropTypes } from 'react'

const LaddaButton = props => (
  <button className="ladda-button">
    <span className="ladda-label">
      {props.children}
    </span>
  </button>
)

LaddaButton.propTypes = {
  children: PropTypes.node,
}

export default LaddaButton
