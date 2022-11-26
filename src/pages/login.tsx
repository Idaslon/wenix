import { spacing, styled } from '@wenix/stitches';

import { Button, Form, Input, Link, Typography } from '@wenix/core';

const LoginForm = styled(Form, {
  width: '100%',
  maxWidth: '450px',

  margin: 'auto',
});

const InputsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$5',

  width: '100%',
  marginTop: spacing(9),
});

export const LoginLink = styled(Link, {
  width: 'fit-content',

  color: '$primary400',
  fontWeight: 500,
});

export const LoginButton = styled(Button, {
  width: '100%',
  marginTop: '68px',
});

export const CreateAccountText = styled(Typography, {
  marginTop: '$6',
});

const Login = () => {
  return (
    <LoginForm>
      <Typography variant="h1">Sign into Wenix</Typography>

      <InputsContainer>
        <Input required type="email" name="email" placeholder="Enter your email" />
        <Input required type="password" name="password" placeholder="Enter your password" />

        <LoginLink href="#">Forgot password</LoginLink>
      </InputsContainer>

      <LoginButton>Sign In</LoginButton>

      <CreateAccountText variant="body1">
        Do not have an account? <LoginLink href="#">Create one</LoginLink>
      </CreateAccountText>
    </LoginForm>
  );
};

export default Login;
