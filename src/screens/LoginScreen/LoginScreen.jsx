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
  LinkLogin,
} from './LoginScreen.styled';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Authorization/operations';

const LoginScreen = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  const dispatch = useDispatch();

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({ ...prevState, [name]: value }));
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign in to your account</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              // value={}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              required
              // value={formData.password}
            />
          </div>

          <SubmitButton type="submit">Sign in</SubmitButton>
        </Form>

        <ChangeFormText>
          Not a member?
          <ChangeFormLink>
            <LinkLogin to="/register">Sign up</LinkLogin>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
};

export default LoginScreen;
