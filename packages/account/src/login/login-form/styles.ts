import { Button, Form, Link, spacing, styled, Typography } from '@wenix/ui'

import { FormInputsContainer } from '../../shared/styles'

export const StyledLoginForm = styled(Form, {
  width: '100%',
  maxWidth: '450px',
})

export const InputsContainer = styled(FormInputsContainer, {
  marginTop: spacing(9),

  input: {
    width: '100%',
  },
})

export const LoginLink = styled(Link, {
  width: 'fit-content',

  color: '$primary400',
  fontWeight: 500,
})

export const LoginButton = styled(Button, {
  width: '100%',
  marginTop: '68px',
})

export const CreateAccountText = styled(Typography, {
  marginTop: '$6',
})
