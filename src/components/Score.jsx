import React, { Component } from 'react';

export default class Score extends Component {

  resetGame = () =>{
    this.props.newGame()
  };

  render() {
    const {bonus, overall} = this.props.score;
    return(
      <div className="score">
        <div className="score__bonuses">
          <p>Bonuses</p>
          <p>{bonus}</p>
        </div>
        <div className="score__total">
          <div>
            <p>Total</p>
            <p>{overall}</p>
          </div>
          <div>
            <button
              className="btn"
              onClick={this.resetGame}>
              new game
            </button>
          </div>
        </div>
      </div>
    )
  }
}