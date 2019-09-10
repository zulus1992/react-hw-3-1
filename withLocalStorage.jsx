import React from "react";

export function withLocalStorage(Component, storageKey) {
  return class extends React.Component {

    onChange(e) {
      localStorage.setItem(storageKey, e.target.value);
      console.log(localStorage.getItem(storageKey));
    }

    render() {
      return (
          <Component value={this.props.value} onChange={value => this.onChange(value)} {...this.props}/>
      );
    }
  };
}
