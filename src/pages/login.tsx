import { spacing, styled } from '@wenix/stitches';
import { default as NextLink } from 'next/link';

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  maxWidth: '450px',

  margin: 'auto',
  paddingTop: spacing(11),
  paddingBottom: spacing(20),
  paddingInline: spacing(12),

  border: '1px solid',
  borderColor: '$stroke',

  backgroundColor: '#141515',
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

const Input = styled('input', {
  paddingBlock: spacing(4.5),
  paddingInline: '$5',

  fontSize: '$medium',
  color: '#F8F8F8',

  border: '2px solid',
  borderColor: '$stroke',
  borderRadius: '4px',

  outline: 'none',
  backgroundColor: '#0D0E0E',

  '&::placeholder': {
    color: '#5F6F72',
    opacity: 1,
  },

  '&:-ms-input-placeholder': {
    color: '#5F6F72',
  },

  '&::-ms-input-placeholder': {
    color: '#5F6F72',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:focus': {
    borderColor: '$primary400',
  },
});

export const Link = styled(NextLink, {
  color: '$common-white',
  textDecoration: 'none',

  outline: 'none',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
});

export const LoginLink = styled(Link, {
  width: 'fit-content',

  color: '$primary400',
  fontWeight: 500,
});

export const Button = styled('button', {
  paddingBlock: '$4',
  paddingInline: '$5',

  fontSize: '$large',
  fontWeight: 700,

  color: '$common-white',
  backgroundColor: '$primary400 ',

  borderRadius: '4px',
  cursor: 'pointer',

  outline: 'none',
  transition: 'background 300ms ease-in-out',

  '&:hover': {
    backgroundColor: '$primary500',
  },

  '&:active': {
    backgroundColor: '$primary700',
  },

  '&:focus-visible': {
    position: 'relative',

    '&::before': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      width: 'calc(100% + 8px)',
      height: 'calc(100% + 8px)',

      border: '4px solid',
      borderColor: '#3A86FF',
      borderRadius: '8px',

      backgroundColor: 'transparent',
    },
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    backgroundColor: '$primary300',
  },
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
    <Form>
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
    </Form>
  );
};

export default Login;
