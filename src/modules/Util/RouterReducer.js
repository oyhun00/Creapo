import { createAction, handleActions } from 'redux-actions';

const SET_ROUTE = 'util/SET_ROUTE';

export const setRoute = createAction(SET_ROUTE)

const initialState = {
  history: {},
};

export default handleActions({
  [SET_ROUTE]: (state, payload) => {
    return {
      ...state,
      history: payload.history,
    }
  }
}, initialState);