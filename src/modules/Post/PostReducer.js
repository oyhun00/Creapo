import * as PostAction from '../../actions/Post/PostAction';
import axios from 'axios';

const initialState = {
  postList: '',
};

const reducers = async (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case PostAction.GET_POST: {
      // const { postList } = state;
      // const getPost = await axios.get('http://localhost:3001/api/post/'),
      //       { data } = getPost,
      //       { result } = data;
      //
      // return {
      //   ...postList,
      //   postList: result
      // }
    }
    default: {
      return state;
    }
  }
}

export default reducers;