import { apiStorage } from '../api/utils'
import { appConfig } from '../config/app'

export const fetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    const authorization = apiStorage.getAuthorization()

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    if (authorization) {
      headers['Authorization'] = authorization
    }

    const res = await fetch(appConfig.serverEndpoint, {
      method: 'POST',
      headers: {
        ...headers,
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0] || 'An unexpected error has ocurred'
      throw new Error(message)
    }

    return json.data
  }
}
