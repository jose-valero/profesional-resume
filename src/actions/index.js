import { LAN_SELECT } from '../types/langTypes';

export const lanSelect = (lan) => (dispatch) => {
  dispatch({ type: LAN_SELECT, payload: lan });
};
