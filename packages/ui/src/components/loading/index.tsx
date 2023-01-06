import { CoreSizes } from '../../../types'
import { Spinner } from './styles'

export type LoadingSizes = CoreSizes

interface Props {
  size?: LoadingSizes
}

export const Loading = ({ size = 'medium' }: Props) => {
  return <Spinner size={size}></Spinner>
}
