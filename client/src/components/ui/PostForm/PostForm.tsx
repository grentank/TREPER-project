import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { addPost } from '../../../redux/postsSlice';
import type Post from '../../types/PostType';

const idGen = (): number => Math.floor(Math.random() * 1e5);

export default function PostForm(): JSX.Element {
  const [inputs, setInputs] = useState<Post>({ title: '', body: '', id: idGen() });
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(addPost(inputs));
    setInputs({ title: '', body: '', id: idGen() });
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
