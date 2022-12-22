import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useAppDispatch } from '../../../redux/hooks';
import { asyncAddPost } from '../../../redux/postsSlice';
import type { PostInput } from '../../types/PostType';

export default function PostForm(): JSX.Element {
  const [inputs, setInputs] = useState<PostInput>({ title: '', body: '' });
  const dispatch = useAppDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(asyncAddPost(inputs));
    setInputs({ title: '', body: '' });
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup floating>
        <Input
          onChange={changeHandler}
          value={inputs.title}
          id="postTitle"
          name="title"
          placeholder="Title"
          type="text"
        />
        <Label for="postTitle">Title</Label>
      </FormGroup>{' '}
      <FormGroup floating>
        <Input
          onChange={changeHandler}
          value={inputs.body}
          id="postBody"
          name="body"
          placeholder="Body"
          type="text"
        />
        <Label for="postBody">Body</Label>
      </FormGroup>{' '}
      <Button color="primary" size="lg">
        Submit
      </Button>
    </Form>
  );
}
