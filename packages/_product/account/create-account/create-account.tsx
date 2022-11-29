import React from 'react';
import { Input, Typography } from '@wenix/ui';
import { FiArrowLeft } from 'react-icons/fi';

import {
  AccountButton,
  AccountForm,
  AccountTitle,
  InputsContainer,
  LeftSideSpacer,
  LoginLink,
  MarketingDescription,
  MarketingText,
  SideContainer,
} from './styles';

export const CreateAccountPage = () => {
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
