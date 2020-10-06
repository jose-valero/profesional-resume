import { LAN_SELECT } from '../types/langTypes';

const initialState = 'ES';

export default (state = initialState, action) => {
  switch (action.type) {
    case LAN_SELECT:
      return action.payload;
    default:
      return state;
  }
};
