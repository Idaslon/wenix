import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react'
import { useLoginMutation, UserModel } from '../../graphql'

interface LoginProps {
  email: string
  password: string
}

interface Auth {
  user: UserModel | null

  isLoggedIn: boolean
  isLoadingLogin: boolean

  login: (props: LoginProps) => void
}

const AuthContext = createContext<Auth | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserModel | null>(null)

  const isLoggedIn = user !== null

  const { mutate, isLoading: isLoadingLogin } = useLoginMutation({
    onSuccess(data) {
      setUser(data.login.user)
    },
  })

  const login = useCallback(
    (props: LoginProps) => {
      mutate({ data: props })
    },
    [mutate]
  )

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isLoadingLogin, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
