import { Button, Form, Link, spacing, styled, Typography, TypographyBody1 } from '@wenix/ui'
import { FormInputsContainer } from '../../shared/styles'

export const StyledAccountForm = styled(Form, {
  flexDirection: 'row',
  columnGap: spacing(5),
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: '1000px',
})

export const AccountTitle = styled(Typography, {
  textAlign: 'center',
})

export const SideContainer = styled('div', {
  width: '100%',
  maxWidth: '350px',
})

export const LeftSideSpacer = styled('div', {
  height: '70px', // Typography-h1 height + marginTop
})

export const InputsContainer = styled(FormInputsContainer, {
  marginTop: spacing(10),

  input: {
    width: '100%',
  },
})

export const AccountButton = styled(Button, {
  width: '100%',
  marginTop: spacing(10),
})

export const MarketingText = styled(Typography, {
  color: '#05F294',
  display: 'contents',
})

export const MarketingDescription = styled(TypographyBody1, {
  marginTop: spacing(10),
  lineHeight: '26px',
})

export const LoginLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$3',

  width: 'fit-content',

  marginLeft: 'auto',
  marginTop: '100px',

  color: '$primary400',
})
