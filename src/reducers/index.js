import { combineReducers } from 'redux';
import CalculatorReducer from './Calculator';

const rootReducer = combineReducers({
  calculator: CalculatorReducer
});

export default rootReducer;