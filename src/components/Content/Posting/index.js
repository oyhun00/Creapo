import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as PostingReducer from '../../../modules/Content/Post/PostingReducer';
import Posting from './Posting';

const PostingContainer = () => {
  const { titleInputChange } = PostingReducer;
  const postingStateProps = useSelector(({PostingReducer}) => PostingReducer, []);

  const dispatch = useDispatch();
  const handleChangeTitle = (e) => dispatch(titleInputChange(e.target.value));
  console.log(titleInputChange)

  return (
    <Posting data={postingStateProps} onChangeTitle={handleChangeTitle} />
  )
}

export default PostingContainer;