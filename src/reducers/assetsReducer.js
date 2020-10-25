import { GET_ASSETS, LOADING, ERROR } from '../types/loadAssetsTypes';

const INITIAL_STATE = {
  getAssets: {},
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ASSETS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};
