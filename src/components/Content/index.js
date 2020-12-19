import React, { useEffect } from 'react';
import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry-layout';

const ContentMain = () => {
  
  useEffect(() => {

    const grid = document.querySelector('.grid')
    const msnry = new Masonry(grid, {
      itemSelector: '.tile',
      columnWidth: grid,
      gutter: 20,
      transitionDuration: 0,
      initLayout: false
    })
    
    msnry.once('layoutComplete', () => {
      grid.classList.add('load')
    })
    
    msnry.layout()
  }, []);
  

  return (
    <div className="grid">
      <div className="grid-sizer">hello</div>
      <div className="grid-item">hello</div>
      <div className="grid-item">hello</div>
      <div className="grid-item">hello</div>
    </div>
  )
}

export default ContentMain;