// import React, { Component } from "react";
import { IMyComponentProps } from './MyComponent'
import MyComponent from './MyComponent'

interface IMyButtonProps extends IMyComponentProps {
  title: string;
  onPress: () => void;
}

class MyButton extends MyComponent<IMyButtonProps> {


    constructor(props: IMyButtonProps) {
        super(props);

        super.getProps();

        this.props.colWidth;
    }

  render() {
    return (
      <p>test!!!!</p>
    );
  }
}