import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { titleInputChange } from '../../../modules/Content/Post/PostingReducer';
import Posting from './Posting';

const PostingContainer = () => {
  const isOpen = useSelector(({headerDropDown}) => headerDropDown.isOpen, []);

  const dispatch = useDispatch();
  const onToggle = () => dispatch(titleInputChange());

  return (
    <Posting />
  )
}

export default PostingContainer;