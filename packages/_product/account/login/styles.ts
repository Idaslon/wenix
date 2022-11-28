import { Button, Form, Link, Typography } from '@wenix/core';
import { spacing, styled } from '@wenix/stitches';

import { FormInputsContainer } from '../shared/styles';

export const LoginForm = styled(Form, {
  width: '100%',
  maxWidth: '450px',

  margin: 'auto',
});

export const InputsContainer = styled(FormInputsContainer, {
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
