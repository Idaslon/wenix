import { styled } from '@wenix/ui'
import { CreateAccountForm, CreateAccountFormErrors } from '@wenix/account'
import { SEO } from '../../components/seo'
import { RegisterInput, useRegisterMutation } from '../../graphql'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { safeFormValidation } from '../../utils/form'
import { createUserSchema } from '@wenix/validations'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  flex: 1,
  padding: '$4',
})

const messagesMap: { [key: string]: CreateAccountFormErrors } = {
  'This email is already in taken': {
    email: 'This email is already in taken',
  },
}

const _CreateAccount = () => {
  const router = useRouter()
  const { mutateAsync, isLoading } = useRegisterMutation()

  const [formErrors, setFormErrors] = useState<CreateAccountFormErrors>()

  const handleCreateAccount = async (formData: RegisterInput) => {
    const { data, issues } = safeFormValidation(createUserSchema, formData)

    if (issues) {
      setFormErrors(issues)
      return
    }

    await mutateAsync({ data }).catch((error: Error) => {
      const errorsMessages = messagesMap[error.message]
      setFormErrors(errorsMessages)
    })

    setFormErrors(undefined)
    router.push('/login')
  }

  return (
    <Container>
      <SEO title="Create Account" />
      <CreateAccountForm onSubmit={handleCreateAccount} loading={isLoading} errors={formErrors} />
    </Container>
  )
}

export default _CreateAccount
