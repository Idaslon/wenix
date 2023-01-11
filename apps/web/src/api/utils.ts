export const STORAGE_PREFIX = '@wenix.'
const STORAGE_AUTHORIZATION_SUFFIX = 'authorization'

function getItem<T extends string>(key: string) {
  const storageKey = STORAGE_PREFIX + key
  const item = localStorage.getItem(storageKey)

  if (item === null) {
    return null
  }

  return JSON.parse(item) as T
}

function setItem(key: string, value: string) {
  const storageKey = STORAGE_PREFIX + key
  return localStorage.setItem(storageKey, JSON.stringify(value))
}

function removeItem(key: string) {
  const storageKey = STORAGE_PREFIX + key
  return localStorage.removeItem(storageKey)
}

export const apiStorage = {
  setItem,
  removeItem,
  getItem,

  setAuthorization(token: string) {
    const fullToken = `Bearer ${token}`
    return setItem(STORAGE_AUTHORIZATION_SUFFIX, fullToken)
  },

  removeAuthorization() {
    return removeItem(STORAGE_AUTHORIZATION_SUFFIX)
  },

  getAuthorization() {
    return getItem(STORAGE_AUTHORIZATION_SUFFIX)
  },
}
