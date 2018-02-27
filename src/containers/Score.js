import { connect } from 'react-redux';

import Score from '../components/Score';
import {
  newGame
} from '../actions/Calculator';

const mapStateToProps = (state) => {
  return {
    score: state.calculator.points
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: () => dispatch(newGame()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);