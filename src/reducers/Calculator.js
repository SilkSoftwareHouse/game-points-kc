import {
  ADD_ITEM,
  NEW_GAME
} from '../actions/Calculator';

import {
  addItem,
  sumOverall
} from '../common/Helpers';

const INITIAL_STATE = {
  bonusTable: {
    a: {
      name: 'a',
      unit_points: 50,
      bonus: {
        qty: 3,
        bonus: 200
      }
    },
    b: {
      name: 'b',
      unit_points: 30,
      bonus: {
        qty: 2,
        bonus: 90
      }
    },
    c:{
      name: 'c',
      unit_points: 20
    },
    d:{
      name: 'd',
      unit_points: 15
    }
  },
  items: {},
  points: {
    bonus: 0,
    overall: 0
  }
};

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case ADD_ITEM:
      let _itemsHelper = addItem(action.item, state.items, state.bonusTable);
      let _items = { ...state.items, ..._itemsHelper};
      let _points = sumOverall(_items, state.bonusTable);

      return {
        ...state,
        items: _items,
        points: _points,
      };

    case NEW_GAME:

      return {
        ...state,
        items: {},
        points: INITIAL_STATE.points
      };

    default:
      return state;
  }
}