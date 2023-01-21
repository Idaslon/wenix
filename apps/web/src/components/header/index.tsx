import * as Popover from '@radix-ui/react-popover'
import { Avatar, styled } from '@wenix/ui'
import { useAuth } from '../../contexts/auth'
import { Link } from '../link'

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

const UserAvatar = styled(Avatar, {
  color: '$common-white',
})

const PopoverTrigger = styled(Popover.Trigger, {
  position: 'relative',

  border: 'none',
  aspectRatio: 1 / 1,

  backgroundColor: 'transparent',

  '&:focus-visible': {
    '&::before': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      width: 'calc(100% + 6px)',
      height: 'calc(100% + 6px)',

      border: '3px solid',
      borderColor: '$blue200',
      borderRadius: '8px',

      backgroundColor: 'transparent',
    },
  },
})

const PopoverContent = styled(Popover.Content, {
  padding: '$3',
  backgroundColor: '$black700',
})

const PopoverArrow = styled(Popover.Arrow, {
  fill: '$black700',
})

export const Header = () => {
  const { user, logout } = useAuth()

  return (
    <Container>
      <Popover.Root>
        <PopoverTrigger>
          <UserAvatar title={user?.name || 'Not logged in'} />
        </PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />
          <Link href={'/logout'}>Logout</Link>
        </PopoverContent>
      </Popover.Root>
    </Container>
  )
}
