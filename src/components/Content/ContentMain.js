import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as actions from '../../actions/GridLayoutAction';

import styled from 'styled-components';

const ContentMain = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/post/').then((res)=> console.log(res));
    dispatch(actions.GridLayout());
  }, [dispatch]);
  
  return (
    <GridLayout className="grid-layout"> 
      <GridSizer className="grid-sizer"></GridSizer>
      <GridItem className="grid-item grid-text-item">
        <p>
          <Link to="/hello">hello</Link>
        </p>
      </GridItem>
      <GridItem className="grid-item">hello</GridItem>
      <GridItem className="grid-item">hello</GridItem>
    </GridLayout>
  )
}

const GridLayout = styled.div`
  position: relative;
  margin: 0.625em 0;
  padding: 0;

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;

const GridSizer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const GridItem = styled.div`
  width: 100%;
  float: left;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  p { 
    height: 100%;
    padding:0.5em;
    background: #fcd661;
  }

  p a { 
    color: #474747;
    font-weight: 900;
    font-size: 2.5em;
    word-break: break-all;
    line-height: 1em;
  }


  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const GridItemImage = styled.img`
  display: block;
  max-width: 100%;

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;



export default ContentMain;