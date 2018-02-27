import React, { Component } from 'react';
import {objectMap} from '../common/Helpers';

export default class Items extends Component {

  renderItemsList(itemsList){
    return objectMap(itemsList, function(item){
      return (
        <tr className={'item'} key={item.name}>
          <td>
            <div className={'item__name'}>{item.name}</div>
          </td>
          <td>{item.qty}</td>
          <td>{item.points.overall}</td>
        </tr>
      )
    });
  };

  render() { 
    const {itemsList} = this.props;

    return(
      <div className="items">

        <div className="items__head">
          <p>ITEMS</p>
          <p>QTY</p>
          <p>SCORE</p>
        </div>

        <div className="items__wrapper">
          <table>
            <tbody>
            {this.renderItemsList(itemsList)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}