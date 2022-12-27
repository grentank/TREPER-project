import React, { useContext, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import type { UserInput } from '../../../types/UserType';
import { UserContext } from '../../contexts/UserContext';

export default function AuthForm(): JSX.Element {
  const [inputs, setInputs] = useState<UserInput>({ username: '', password: '' });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const context = useContext(UserContext);
  const submitHandler = context?.submitHandler;
  return (
    <Form
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        if (submitHandler) submitHandler(inputs);
      }}
    >
      <FormGroup floating>
        <Input
          onChange={changeHandler}
          value={inputs.username}
          id="exampleUsername"
          name="username"
          placeholder="Username"
          type="text"
        />
        <Label for="exampleUsername">Username</Label>
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
