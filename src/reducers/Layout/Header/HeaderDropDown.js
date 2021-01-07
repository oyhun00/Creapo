import * as HeaderDropDown from '../../../actions/HeaderDropDown';

const initialState = {
  isOpen: false,
};

const reducers = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case HeaderDropDown.DROPDOWN_OPEN: {
      return { isOpen: !state.isOpen };
    }
    default: {
      return state;
    }
  }
}

export default reducers;