import { createAction, handleActions } from 'redux-actions';

const TITLE_INPUT_CHANGE = 'posting/TITLE_INPUT_CHANGE';

export const titleInputChange = createAction(TITLE_INPUT_CHANGE);

const initialState = {
  title: '',
};

export default handleActions({
  [TITLE_INPUT_CHANGE]: (state, { value }) => {
    return {
      ...state,
      title: value
    }
  }
}, initialState);