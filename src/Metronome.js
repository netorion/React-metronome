import React, { Component } from "react";
import "./Metronome.css";
import click1 from "./click1.wav";
import click2 from "./click2.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatPerMeaure: 4
    };
    // Create Audio objects with the files Webpack loaded,
    // and we'll play them later.
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleBpmChange = event => {
    const bpm = event.target.vlaue;
    this.setState({ bpm });
  };

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange}
          />
        </div>
        <button>{playing ? "Stop" : "Start"}</button>
      </div>
    );
  }
}

export default Metronome;
