import React, { useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { fetchAllPosts } from '../../../redux/postsSlice';
import type { RootState } from '../../../redux/store';
import OnePostCard from '../../ui/OnePostCard/OnePostCard';
import PostForm from '../../ui/PostForm/PostForm';

export default function PostsPage(): JSX.Element {
  const posts = useAppSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchAllPosts());
    }
  }, []);
  return (
    <>
      <Row>
        <PostForm />
      </Row>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12}>
            <OnePostCard post={post} />
          </Col>
        ))}
      </Row>
    </>
  );
}
