import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import type { RootState } from '../../../redux/store';
import OnePostCard from '../../ui/OnePostCard/OnePostCard';
import PostForm from '../../ui/PostForm/PostForm';

export default function PostsPage(): JSX.Element {
  const posts = useSelector((state: RootState) => state.posts);
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
