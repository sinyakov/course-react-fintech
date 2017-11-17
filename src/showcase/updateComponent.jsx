import React, { Component } from 'react';

export default class updateComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.status !== nextProps.status ||
      this.props.accounts !== nextProps.accounts
    );
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
