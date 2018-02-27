import React, { Component } from 'react';
import {objectMap} from '../common/Helpers';

export default class Board extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(item) {
    this.props.addItem({name: item.name});
  };

  renderBtns = (bonusTable) => {
   return objectMap(bonusTable, function(item, key){
      return (
        <div
          className="board__item"
          onClick={() => this.onClick(item)}
          key={item.name}>
          {item.name}
        </div>
      )
    }.bind(this));
  };

  render() {
    const {bonusTable} = this.props;

    return(
      <div className="board">
        <h3>Items</h3>
        <div className="board__items">
          {this.renderBtns(bonusTable)}
        </div>
      </div>
    )
  }
}