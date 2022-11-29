import { Input, Typography } from '@wenix/ui';
import { CreateAccountText, InputsContainer, LoginButton, LoginForm, LoginLink } from './styles';

export const LoginPage = () => {
  return (
    <LoginForm>
      <Typography variant="h1">Sign into Wenix</Typography>

      <InputsContainer>
        <Input required type="email" name="email" placeholder="Enter your email" />
        <Input required type="password" name="password" placeholder="Enter your password" />

        <LoginLink href="#">Forgot password</LoginLink>
      </InputsContainer>

      <LoginButton size="large">Sign In</LoginButton>

      <CreateAccountText variant="body1">
        Do not have an account? <LoginLink href="/create-account">Create one</LoginLink>
      </CreateAccountText>
    </LoginForm>
  );
};
