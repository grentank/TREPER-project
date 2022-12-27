import type { BackendUser } from './UserType';

type Post = {
  title: string;
  body: string;
  id: number;
  User: BackendUser;
};

type PostInput = Omit<Post, 'id' | 'User'>;

type PostId = Post['id'];

export type { Post, PostInput, PostId };
