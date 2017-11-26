export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const REORDER_NOTE = 'REORDER_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case REMOVE_NOTE:
      return state.filter(note => note.id !== action.id);
    case REORDER_NOTE:
      return state.map(note => {
        if (note.id === action.fromId) {
          return state[state.findIndex(note => note.id === action.toId)];
        } else if (note.id === action.toId) {
          return state[state.findIndex(note => note.id === action.fromId)];
        } else return note;
      });
    case UPDATE_NOTE:
      const index = state.findIndex(note => note.id === action.note.id);
      return index === -1
        ? state
        : [...state.slice(0, index), action.note, ...state.slice(index + 1)];
    case DELETE_ALL_NOTES:
      return [];
    default:
      return state;
  }
};
