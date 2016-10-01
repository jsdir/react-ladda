import React, { Component } from 'react'
import LaddaButton, {
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  CONTRACT,
  CONTRACT_OVERLAY,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT
} from 'react-ladda'

import './demo.css'

class App extends Component {
  state = {
    expLeft: false,
    expRight: false,
    expUp: false,
    expDown: false,
    expContract: false,
    expOverlay: false,
    expSlideLeft: false,
    expSlideRight: false,
    expSlideUp: false,
    expSlideDown: false,
    expZoomIn: false,
    expZoomOut: false,
  }

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    })
  }

  render() {
    return (
      <div className="examples">
        <div className="intro">
          <h1>Ladda</h1>
          <p>
            A UI concept which merges loading indicators into the action that invoked them.
            Primarily intended for use with forms where
            it gives users immediate feedback upon submit rather than leaving them wondering
            while the browser does its thing. For a
            real-world example, check out any of the forms on <a href="http://slides.com">slides.com</a>.
          </p>
          <section className="button-demo">
            <h3>expand-left</h3>
            <LaddaButton
              loading={this.state.expLeft}
              onClick={() => this.toggle('expLeft')}
              data-color="green"
              data-style={EXPAND_LEFT}
            >
              Submit!
            </LaddaButton>
          </section>
          <section className="button-demo">
            <h3>expand-right</h3>
            <LaddaButton
              loading={this.state.expRight}
              onClick={() => this.toggle('expRight')}
              data-color="green"
              data-style={EXPAND_RIGHT}
            >
              Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>expand-up</h3>
            <LaddaButton
              loading={this.state.expUp}
              onClick={() => this.toggle('expUp')}
              data-color="green"
              data-style={EXPAND_UP}
            >
              Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>expand-down</h3>
            <LaddaButton
              loading={this.state.expDown}
              onClick={() => this.toggle('expDown')}
              data-color="green"
              data-style={EXPAND_DOWN}
            >
              Submit!
            </LaddaButton>
          </section>

          {/* Set 2 */}
          <section className="button-demo">
            <h3>contract</h3>
            <LaddaButton
              loading={this.state.expContract}
              onClick={() => this.toggle('expContract')}
              data-color="red"
              data-style={CONTRACT}
            >
            Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>contract-overlay</h3>
            <LaddaButton
              loading={this.state.expOverlay}
              onClick={() => this.toggle('expOverlay')}
              data-color="red"
              data-style={CONTRACT_OVERLAY}
            >
            Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>zoom-in</h3>
            <LaddaButton
              loading={this.state.expZoomIn}
              onClick={() => this.toggle('expZoomIn')}
              data-color="red"
              data-style={ZOOM_IN}
            >
            Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>zoom-out</h3>
            <LaddaButton
              loading={this.state.expZoomOut}
              onClick={() => this.toggle('expZoomOut')}
              data-color="red"
              data-style={ZOOM_OUT}
            >
            Submit!
            </LaddaButton>
          </section>

          {/* Set 3 */}

          <section className="button-demo">
            <h3>slide-left</h3>
            <LaddaButton
              loading={this.state.expSlideLeft}
              onClick={() => this.toggle('expSlideLeft')}
              data-color="blue"
              data-style={SLIDE_LEFT}
            >
            Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>slide-right</h3>
            <LaddaButton
              loading={this.state.expSlideRight}
              onClick={() => this.toggle('expSlideRight')}
              data-color="blue"
              data-style={SLIDE_RIGHT}
            >
            Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>slide-up</h3>
            <LaddaButton
              loading={this.state.expSlideUp}
              onClick={() => this.toggle('expSlideUp')}
              data-color="blue"
              data-style={SLIDE_UP}
            >
            Submit!
            </LaddaButton>
          </section>

          <section className="button-demo">
            <h3>slide-down</h3>
            <LaddaButton
              loading={this.state.expSlideDown}
              onClick={() => this.toggle('expSlideDown')}
              data-color="blue"
              data-style={SLIDE_DOWN}
            >
            Submit!
            </LaddaButton>
          </section>
        </div>
      </div>
    )
  }
}

export default App
