React = require "react"
Ladda = require "ladda"

LaddaButton = React.createClass
  displayName: "LaddaButton"

  getDefaultProps: ->
    className: "ladda-button"

  componentDidMount: ->
    @laddaButton = Ladda.create @getDOMNode()

  componentWillUnmount: ->
    @laddaButton.remove()

  componentDidUpdate: ->
    # Set progress if it is defined.
    if @props.progress
      @laddaButton.setProgress @props.progress

    # Set animation activity.
    if @props.active
      @laddaButton.start()
    else
      @laddaButton.stop()

  render: -> @transferPropsTo @props.children

module.exports = LaddaButton
