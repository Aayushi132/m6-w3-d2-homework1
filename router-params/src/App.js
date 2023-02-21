import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      id: "",
    };
  }
  render() {
    const Child = (id) => {
      this.setState({
        clicked: true,
        id: id,
      });

      // Below this comment, there's one major key script missing
    };
    return (
      <div>
        <h2>TV APPS</h2>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix"
            onClick={() => Child("Netflix")}
          ></img>
          <img
            className="imageStyle"
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
            alt="HBO"
            onClick={() => Child("HBO Max")}
          ></img>
          <img
            className="imageStyle"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
            alt="Hulu"
            onClick={() => Child("Hulu")}
          ></img>
          <img
            className="imageStyle"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
            alt="Prime"
            onClick={() => Child("Prime Video")}
          ></img>
        </div>

        {this.state.clicked && (
          <p>
            <h3>
              You Selected:<span>{this.state.id}</span>
            </h3>
          </p>
        )}
      </div>
    );
  }
}

export default App;
