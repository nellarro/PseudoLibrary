// state argument is not application state. It is only in charge of the state that is part of this reducer.

export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
      // always return a fresh object
  }
  return state
};
