import { IconBaseProps } from 'react-icons'
import { FiUser } from 'react-icons/fi'

export type AvatarProps = IconBaseProps
// export type AvatarRef = HTMLOrSVGElement

export const Avatar = (props: AvatarProps) => {
  return <FiUser size={'30px'} cursor="pointer" {...props} />
}
