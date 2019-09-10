import React from "react";

export function withOnlineStatus(Component) {
  return class extends React.Component {
    state = {
      isOnline: navigator.onLine
    };

    onOnlineChange = () => {
      var isOnline=navigator.onLine;
     this.setState({ isOnline });
    };

    componentDidMount() {
      window.addEventListener('online', this.onOnlineChange);
      window.addEventListener('offline', this.onOnlineChange);
    }

    componentWillUnmounte() {
      document.removeEventListener("online", this.onOnlineChange);
      document.removeEventListener("offline", this.onOnlineChange);
    }

    render() {
      return (
          <Component  isOnline={this.state.isOnline}/>
      );
    }
  };
}
