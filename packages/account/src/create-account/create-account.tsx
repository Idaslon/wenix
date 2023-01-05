import React from 'react'
import { Input, Typography } from '@wenix/ui'
import { FiArrowLeft } from 'react-icons/fi'

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
} from './styles'

export interface CreateAccountFormSubmitData {
  name: string
  email: string
  password: string
}

export type CreateAccountFormErrors = Partial<CreateAccountFormSubmitData>

interface CreateAccountFormProps {
  onSubmit: (data: CreateAccountFormSubmitData) => void
  errors?: CreateAccountFormErrors
}

export const CreateAccountForm = ({ onSubmit, errors }: CreateAccountFormProps) => {
  return (
    <AccountForm
      onSubmit={(event) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData.entries())

        onSubmit(data as unknown as CreateAccountFormSubmitData)
      }}
    >
      <SideContainer>
        <AccountTitle variant="h1">Create Account</AccountTitle>

        <InputsContainer>
          <Input
            required
            type="text"
            name="name"
            placeholder="Enter your name"
            error={errors?.name}
          />

          <Input
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            error={errors?.email}
          />

          <Input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            error={errors?.password}
          />
        </InputsContainer>

        <AccountButton type="submit" size="large">
          Create Account
        </AccountButton>
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
  )
}
