import React from "react";

const SCRIPT_SRC = "https://www.youtube.com/iframe_api";

class ProgressBar extends React.Component {

  state = {
    percentage: 0
  };

  render() {
    console.log(this.state.percentage);
    return (
      <div>
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage - 1 }))}>
          Dec
</button>
        <ProgressBar percentage={this.state.percentage} />
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage + 1 }))}>
          Inc
</button>
      </div >
    );
  }
}