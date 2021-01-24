import { createAction, handleActions } from 'redux-actions';

const DROPDOWN_OPEN = 'header/DROPDOWN_OPEN';

export const headerDropDown = createAction(DROPDOWN_OPEN);

const initialState = {
  isOpen: false,
};

// const reducers = (state = initialState, action) => {
//   const { type } = action;
//   switch (type) {
//     case HeaderDropDown.DROPDOWN_OPEN: {
//       return { isOpen: !state.isOpen };
//     }
//     default: {
//       return state;
//     }
//   }
// }

export default handleActions({
  [DROPDOWN_OPEN]: ({ isOpen }) => {
    return {
      ...state,
      isOpen: !isOpen
    }
  }
}, initialState)

// export default reducers;