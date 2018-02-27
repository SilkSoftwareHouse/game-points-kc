import { connect } from 'react-redux';

import Items from '../components/Items';

const mapStateToProps = (state) => {
  return {
    itemsList: state.calculator.items,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);