import { Avatar, styled } from '@wenix/ui'
import { useAuth } from '../../contexts/auth'

const Container = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  width: '100%',
  height: '60px',

  padding: '$3',
  backgroundColor: '$black600',
})

export const Header = () => {
  const { user, logout } = useAuth()

  return (
    <Container>
      <Avatar title={user?.name || 'Not logged in'} onClick={logout} />
    </Container>
  )
}
