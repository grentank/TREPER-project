type Post = {
  title: string;
  body: string;
  id: number;
};

type PostInput = Omit<Post, 'id'>;

type PostId = Post['id'];

export type { Post, PostInput, PostId };
