import { spacing, styled } from '@wenix/stitches';
import { Button, Form, Input, Link, Typography, TypographyBody1 } from '@wenix/core';

import { FiArrowLeft } from 'react-icons/fi';

const AccountForm = styled(Form, {
  flexDirection: 'row',
  columnGap: spacing(5),
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: '1000px',

  margin: 'auto',
});

const AccountTitle = styled(Typography, {
  textAlign: 'center',
});

const SideContainer = styled('div', {
  width: '100%',
  maxWidth: '350px',
});

const LeftSideSpacer = styled('div', {
  height: '70px', // Typography-h1 height + marginTop
});

const InputsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$5',

  width: '100%',
  marginTop: spacing(10),
});

const AccountButton = styled(Button, {
  width: '100%',
  marginTop: spacing(10),
});

const MarketingText = styled(Typography, {
  color: '#05F294',
  display: 'contents',
});

const MarketingDescription = styled(TypographyBody1, {
  marginTop: spacing(10),
  lineHeight: '26px',
});

const LoginLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$3',

  width: 'fit-content',

  marginLeft: 'auto',
  marginTop: '100px',

  color: '$primary400',
});

const CreateAccount = () => {
  return (
    <AccountForm>
      <SideContainer>
        <AccountTitle variant="h1">Create Account</AccountTitle>

        <InputsContainer>
          <Input required type="text" name="name" placeholder="Enter your name" />
          <Input required type="email" name="email" placeholder="Enter your email" />
          <Input required type="password" name="password" placeholder="Enter your password" />
        </InputsContainer>

        <AccountButton size="large">Create Account</AccountButton>
      </SideContainer>

      <SideContainer>
        <LeftSideSpacer />
        <MarketingText variant="h1" size="large">
          Create an account on our platform
        </MarketingText>

        <MarketingDescription as="div">
          By creating an account on our platform you will have the opportunity to{' '}
          <MarketingText variant="body1">communicate</MarketingText> with all your{' '}
          <MarketingText variant="body1">friends</MarketingText>!
        </MarketingDescription>

        <LoginLink href="/login">
          <FiArrowLeft size="20px" />
          <Typography variant="body1">Back to Login</Typography>
        </LoginLink>
      </SideContainer>
    </AccountForm>
  );
};

export default CreateAccount;
