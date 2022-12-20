import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import type User from '../../types/UserType';

export default function AuthForm(): JSX.Element {
  const [inputs, setInputs] = useState<User>({ username: '', password: '' });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <Form>
      <FormGroup floating>
        <Input
          onChange={changeHandler}
          value={inputs.username}
          id="exampleEmail"
          name="username"
          placeholder="Email"
          type="text"
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{' '}
      <FormGroup floating>
        <Input
          onChange={changeHandler}
          value={inputs.password}
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Label for="examplePassword">Password</Label>
      </FormGroup>{' '}
      <Button color="success" size="lg" outline>
        Submit
      </Button>
    </Form>
  );
}
