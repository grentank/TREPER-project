import React, { useContext } from 'react';
import { Button, Card, CardFooter, CardText, CardTitle } from 'reactstrap';
import { useAppDispatch } from '../../../redux/hooks';
import { asyncDeletePost } from '../../../redux/postsSlice';
import type { Post } from '../../../types/PostType';
import { UserContext } from '../../contexts/UserContext';

type OnePostCardProps = {
  post: Post;
};

export default function OnePostCard({ post }: OnePostCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteHandler = (): void => {
    dispatch(asyncDeletePost(post.id));
  };
  const context = useContext(UserContext);
  const user = context?.user;
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
      <CardFooter>{post.User.username}</CardFooter>
      {user?.status === 'logged' && user.id === post.User.id && (
        <Button color="danger" onClick={deleteHandler}>
          x
        </Button>
      )}
    </Card>
  );
}
