import React from "react";
import { ProgressBar } from "./ProgressBar";

export class ProgressBarControll extends React.Component {

  state = {
    percentage: 0
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage <= 0 ? 0 : (percentage - 5) }))}>
          Dec
</button>
        <ProgressBar percentage={this.state.percentage} />
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage >= 100 ? 100 : (percentage + 5) }))}>
          Inc
</button>
      </div >
    );
  }
}