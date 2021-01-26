import { createAction, handleActions } from 'redux-actions';

const DROPDOWN_OPEN = 'header/DROPDOWN_OPEN';

export const headerDropDown = createAction(DROPDOWN_OPEN);

const initialState = {
  isOpen: false,
};

export default handleActions({
  [DROPDOWN_OPEN]: (state) => {
    return {
      ...state,
      isOpen: !state.isOpen
    }
  }
}, initialState);