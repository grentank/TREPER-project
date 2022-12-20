import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type Post from '../components/types/PostType';

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
    deletePost: (state, action: PayloadAction<number>) =>
      state.filter((post) => post.id !== action.payload),
  },
});

export const { setPosts, addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
