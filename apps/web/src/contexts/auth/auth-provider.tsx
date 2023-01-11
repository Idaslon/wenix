import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react'
import { apiStorage } from '../../api/utils'
import { LoginModel, useLoginMutation, UserModel } from '../../graphql'

interface LoginProps {
  email: string
  password: string
}

interface Auth {
  user: UserModel | null
  isLoggedIn: boolean

  login: (props: LoginProps) => Promise<LoginModel>
}

const AuthContext = createContext<Auth | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserModel | null>(null)

  const isLoggedIn = user !== null

  const { mutateAsync } = useLoginMutation()

  const login = useCallback(
    async (props: LoginProps) => {
      const response = await mutateAsync({ data: props })

      apiStorage.setAuthorization(response.login.token)
      setUser(response.login.user)

      return response.login
    },
    [mutateAsync]
  )

  return <AuthContext.Provider value={{ user, isLoggedIn, login }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
