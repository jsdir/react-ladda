React = require "react"
shallowEqual = require "react/lib/shallowEqual"
Ladda = require "ladda"

LaddaButton = React.createClass
  displayName: "LaddaButton"

  getDefaultProps: ->
    style: "expand-left"

  propTypes:
    onClick: React.PropTypes.func
    active: React.PropTypes.bool
    progress: React.PropTypes.number
    style: React.PropTypes.string
    color: React.PropTypes.string
    size: React.PropTypes.string
    spinnerSize: React.PropTypes.number
    spinnerColor: React.PropTypes.string

  componentDidMount: ->
    @laddaButton = Ladda.create @getDOMNode()

  componentWillUnmount: ->
    @laddaButton.remove?()

  shouldComponentUpdate: (nextProps, nextState) ->
    not shallowEqual @props, nextProps

  componentDidUpdate: ->
    # Set animation activity.
    if @props.active
      unless @active
        @active = true
        @laddaButton.start()
    else
      @active = false
      @laddaButton.stop()

    # Set progress if it is defined.
    if @props.progress
      @laddaButton.setProgress @props.progress

  onClick: (args...) ->
    @props.onClick? args...

  getButtonClassName: (className) ->
    laddaClass = "ladda-button"

    if className
      return  "#{className} #{laddaClass}"
    else
      return laddaClass

  render: ->
    props = @props.children.props
    props.className = @getButtonClassName props.className
    props.onClick = @onClick

    # Set ladda options.
    options =
      style: "data-style"
      color: "data-color"
      size: "data-size"
      spinnerSize: "data-spinner-size"
      spinnerColor: "data-spinner-color"

    for prop, dataAttr of options
      if @props[prop] then props[dataAttr] = @props[prop]

    return @props.children

module.exports = LaddaButton
