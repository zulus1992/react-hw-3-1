import React from "react";

export function withOnlineStatus(Component) {
  return class extends React.Component {
    inputRef = React.createRef();
    state = {
      isOnline: window.navigator.onLine
    };

    onOnlineChange = (isOnline) => {
      if (isOnline)
        this.setState({ isOnline, start: performance.now() });
      else
        this.setState({ isOnline, end: performance.now() });
    };

    componentDidMount() {
      window.addEventListener('online', this.onOnlineChange(true));
      window.addEventListener('offline', this.onOnlineChange(false));
    }

    componentWillUnmounte() {
      document.removeEventListener("online", this.onOnlineChange);
      document.removeEventListener("offline", this.onOnlineChange);
    }

    render() {
      return (
          <Component isOnline={this.state.isOnline}/>
      );
    }
  };
}
