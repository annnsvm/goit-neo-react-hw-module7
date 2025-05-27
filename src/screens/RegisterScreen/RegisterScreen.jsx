import React from 'react';
import {
  Wrapper,
  Content,
  Form,
  FormTitle,
  Label,
  Input,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
  LinkRegister,
} from './RegisterScreen.styled';

import { useDispatch } from 'react-redux';
import { register } from 'redux/Authorization/operations';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign up</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">First Name</Label>
            <Input name="name" type="text" autoComplete="name" required />
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <Input name="email" type="email" autoComplete="email" required />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" required />
          </div>

          <SubmitButton type="submit">Sign up</SubmitButton>
        </Form>

        <ChangeFormText>
          Already have an account?
          <ChangeFormLink>
            <LinkRegister to="/login">Sign in</LinkRegister>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
};

export default RegisterScreen;
