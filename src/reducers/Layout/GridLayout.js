import * as GridLayout from '../../actions/GridLayoutAction';
import Masonry from 'masonry-layout';

const initialState = {
};

const reducers = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GridLayout.GRID_LAYOUT: {
      const msnry = new Masonry('.grid-layout', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
      })
  
      const TextItem = document.querySelector('.grid-text-item');
      TextItem.style.height=window.getComputedStyle(TextItem).width;
    }
    default: {
      return state;
    }
  }
}

export default reducers;