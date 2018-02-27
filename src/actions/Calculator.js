export const ADD_ITEM = 'ADD_ITEM';
export const NEW_GAME = 'NEW_GAME';

export function addItem(item) {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      item: item
    })
  }
}

export function newGame() {
  return (dispatch) => {
    dispatch({
      type: NEW_GAME
    })
  }
}