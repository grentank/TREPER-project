import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Post, PostId, PostInput } from '../components/types/PostType';
import type { ThunkDispatch } from './hooks';
// import type { AppDispatch } from './store';
// import { AppDispatch } from './store';

// Define the initial state using that type
const initialState: Post[] = [];

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => action.payload,
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<PostId>) =>
      state.filter((post) => post.id !== action.payload),
  },
});

export const { setPosts, addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;

export const asyncAddPost: ThunkDispatch<PostInput> = (newPost) => (dispatch) => {
  axios
    .post('/posts', newPost)
    .then((res: { data: Post }) => dispatch(addPost(res.data)))
    .catch(console.log);
};

export const fetchAllPosts: ThunkDispatch = () => (dispatch) => {
  axios('/posts')
    .then((res: { data: Post[] }) => dispatch(setPosts(res.data)))
    .catch(console.log);
};

export const asyncDeletePost: ThunkDispatch<PostId> = (id) => (dispatch) => {
  axios
    .delete(`/posts/${id.toString()}`)
    .then(() => dispatch(deletePost(id)))
    .catch(console.log);
};
