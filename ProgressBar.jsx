import React from "react";
import Nanobar from "nanobar";

export class ProgressBar extends React.Component {
  nanobar = null;
  ref = React.createRef();
  componentDidMount() {
    this.nanobar = new Nanobar({
      target: this.ref.current,
    });
  }
  
  componentDidUpdate() {
    this.nanobar.go(this.props.percentage);
  }

  render() {
    return <div ref={this.ref} />
  };
}