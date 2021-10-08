import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types';

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  // grab payload from action
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    // and a new note (from payload obj) to the prev notes
    notes: [...state.notes, payload],
  }),
  [FETCH_NOTES]: (state, { payload }) => ({ ...state, notes: payload, loading: false }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  }),
  DEFAULT: (state) => state,
};

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
