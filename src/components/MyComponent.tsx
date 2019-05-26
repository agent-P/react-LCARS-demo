import React, { Component } from "react";

export interface IMyComponentProps {
  colWidth?: number;
}

class MyComponent<P extends IMyComponentProps> extends Component<P> {
  getProps() {
    return this.props
  }
}

export default MyComponent;