import * as dropDownOpen from '../actions/HeaderDropDown';

const initialState = {
  isOpen: false,
};

const reducers = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case dropDownOpen.DROPDOWN_OPEN: {
      return { isOpen: !state.isOpen };
    }
  }
}

export default reducers;