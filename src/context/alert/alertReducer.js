import { HIDE_ALERT, SHOW_ALERT } from '../types';

const handlers = {
  // The keys are action types. It receives state and action payload(type, text, etc). Set flag visible - we need it for animation
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

// reducer checks the action type and returns the modified state
export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
