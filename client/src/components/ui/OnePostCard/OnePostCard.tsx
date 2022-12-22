import React from 'react';
import { Button, Card, CardText, CardTitle } from 'reactstrap';
import { useAppDispatch } from '../../../redux/hooks';
import { asyncDeletePost } from '../../../redux/postsSlice';
import type { Post } from '../../types/PostType';

type OnePostCardProps = {
  post: Post;
};

export default function OnePostCard({ post }: OnePostCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteHandler = (): void => {
    dispatch(asyncDeletePost(post.id));
  };
  return (
    <Card
      body
      className="my-2"
      style={{
        width: '18rem',
      }}
    >
      <CardTitle tag="h5">{post.title}</CardTitle>
      <CardText>{post.body}</CardText>
      <Button color="danger" onClick={deleteHandler}>
        x
      </Button>
    </Card>
  );
}
