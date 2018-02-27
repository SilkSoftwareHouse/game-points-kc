import React, { Component } from 'react';
import BoardContainer from '../containers/Board';
import ItemsContainer from '../containers/Items';
import ScoreContainer from '../containers/Score';
import Header from '../components/Header';

export default class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <main>
        <section>

          <Header  text={'Bonus calculator'}/>

          <BoardContainer />

        </section>
        <aside>

          <Header text={'Player Items'}/>

          <ItemsContainer />

          <ScoreContainer />

        </aside>
      </main>

    );
  }
}