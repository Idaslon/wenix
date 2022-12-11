import { LoginForm } from '@wenix/account'
import { styled } from '@wenix/ui'
import { SEO } from '../../components/seo'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const _Login = () => {
  return (
    <Container>
      <SEO title="Login" />
      <LoginForm />
    </Container>
  )
}

export default _Login
