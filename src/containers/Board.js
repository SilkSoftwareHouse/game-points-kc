import { connect } from 'react-redux';

import Board from '../components/Board';
import {
  addItem
} from '../actions/Calculator';

const mapStateToProps = (state) => {
  return {
    bonusTable: state.calculator.bonusTable
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);