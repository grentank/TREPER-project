import React from 'react';
import { Row } from 'reactstrap';
import AuthForm from '../../ui/AuthForm/AuthForm';

export default function AuthPage(): JSX.Element {
  return (
    <Row>
      <AuthForm />
    </Row>
  );
}
