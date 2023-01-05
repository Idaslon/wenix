import { LoginForm, LoginFormSubmitData } from '@wenix/account'
import { styled } from '@wenix/ui'
import { SEO } from '../../components/seo'
import { useAuth } from '../../contexts/auth'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const _Login = () => {
  const { login } = useAuth()

  const handleLogin = async (data: LoginFormSubmitData) => {
    await login(data).catch((error: Error) => {})
    console.log('Logged In')
  }

  return (
    <Container>
      <SEO title="Login" />

      <LoginForm onSubmit={handleLogin} />
    </Container>
  )
}

export default _Login
