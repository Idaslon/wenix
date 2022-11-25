import { spacing, styled } from '@wenix/stitches';

import { Button } from '@wenix/button';
import { Input } from '@wenix/input';
import { Form } from '@wenix/form';
import { Link } from '@wenix/link';

const LoginForm = styled(Form, {
  width: '100%',
  maxWidth: '450px',

  margin: 'auto',
});

const Title = styled('h1', {
  color: '#F8F8F8',
  fontSize: '$extraLarge',
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

export const Paragraph = styled('p', {
  fontSize: '$medium',
  lineHeight: 1.2,
  marginTop: '$6',

  a: {
    fontSize: '$medium',
    lineHeight: 1.2,
  },
});

const Login = () => {
  return (
    <LoginForm>
      <Title>Sign into Wenix</Title>

      <InputsContainer>
        <Input
          required
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <Input
          required
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <LoginLink href="#">Forgot password</LoginLink>
      </InputsContainer>

      <LoginButton>Sign In</LoginButton>

      <Paragraph>
        Do not have an account? <LoginLink href="#">Create one</LoginLink>
      </Paragraph>
    </LoginForm>
  );
};

export default Login;
