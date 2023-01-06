import { styled } from '@wenix/ui'
import { CreateAccountForm } from '@wenix/account'
import { SEO } from '../../components/seo'
import { RegisterInput, useRegisterMutation } from '../../graphql'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const _CreateAccount = () => {
  const { mutateAsync, isLoading } = useRegisterMutation()

  const handleCreateAccount = async (data: RegisterInput) => {
    await mutateAsync({ data }).catch((error: Error) => console.log(error.message))
  }

  return (
    <Container>
      <SEO title="Create Account" />
      <CreateAccountForm onSubmit={handleCreateAccount} loading={isLoading} />
    </Container>
  )
}

export default _CreateAccount
