import { LoginForm, LoginFormErrors, LoginFormSubmitData } from '@wenix/account'
import { styled } from '@wenix/ui'
import { loginSchema } from '@wenix/validations'
import { useState } from 'react'
import { SEO } from '../../components/seo'
import { useAuth } from '../../contexts/auth'
import { safeFormValidation } from '../../utils/form'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const messagesMap: { [key: string]: LoginFormErrors } = {
  'User not found': {
    email: 'Login or password is invalid',
    password: 'Login or password is invalid',
  },

  'Passwords do not match': {
    email: 'Login or password is invalid',
    password: 'Login or password is invalid',
  },
}

const _Login = () => {
  const { login, isLoadingLogin } = useAuth()
  const [formErrors, setFormErrors] = useState<LoginFormErrors | undefined>(undefined)

  const handleLogin = async (formData: LoginFormSubmitData) => {
    const { data, issues } = safeFormValidation(loginSchema, formData)

    if (issues) {
      setFormErrors(issues)
      return
    }

    const response = await login(data).catch((error: Error) => {
      const errorsMessages = messagesMap[error.message]
      setFormErrors(errorsMessages)
    })

    if (response) {
      console.log(response)
      setFormErrors(undefined)
    }
  }

  return (
    <Container>
      <SEO title="Login" />

      <LoginForm onSubmit={handleLogin} errors={formErrors} loading={isLoadingLogin} />
    </Container>
  )
}

export default _Login
