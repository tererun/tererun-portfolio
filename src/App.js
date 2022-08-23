import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import tererunNoEyesImage from "./assets/tererun_no_eyes.png";
import tererunAnimatedEyes from "./assets/tererun_animated_eyes.gif";

import "./App.css";

function App() {
  return (
      <div className="App">
        <NavigationIconButton />
        <header className="App-header">
          <TererunIcon />
        </header>
      </div>
  );
}

class NavigationIconButton extends React.Component {
  render() {
    return (
        <div className="navigation-icon-button-wrapper">
          <FontAwesomeIcon icon={faBars} />
        </div>
    );
  }
}

class NavigationBar extends React.Component {

}

class TererunIcon extends React.Component {
  state = {
    left: 0,
    top: 0
  }

  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      this.setState({left: e.pageX, top: e.pageY});
    });
  }

  render() {
    return (
        <div className="tererun-icon-wrapper">
          <img className="tererun-no-eyes-icon" src={tererunNoEyesImage} />
          <img
              style={{
                left: (this.state.left / (window.innerWidth / 2) - 1) * 3,
                top: (this.state.top / (window.innerHeight / 2) - 1) * 3
              }}
              className="tererun-animated-eyes"
              src={tererunAnimatedEyes}
          />
        </div>
    );
  }
}

export default App;
