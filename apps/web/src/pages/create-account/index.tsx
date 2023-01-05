import { styled } from '@wenix/ui'
import { CreateAccountForm } from '@wenix/account'
import { useEffect, useState } from 'react'
import { SEO } from '../../components/seo'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const _CreateAccount = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    if (!user) return

    setUser({})
  }, [])

  return (
    <Container>
      <SEO title="Create Account" />
      <CreateAccountForm />
    </Container>
  )
}

export default _CreateAccount
