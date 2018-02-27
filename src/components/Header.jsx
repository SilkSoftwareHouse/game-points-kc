import React, { PureComponent } from 'react';

export default class Header extends PureComponent {

  render() {
    const {text} = this.props;
    return(
      <header>
        <h2> { text } </h2>
      </header>
    )
  }
}