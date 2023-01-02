export const baseErrorMessages = {
  default: 'An error occurred',

  // Auth
  'email-taken': 'This email is already in taken',
  'invalid-token': 'Invalid Token',
  'user-not-found': 'User not found',
  'password-mismatch': 'Passwords do not match',

  // Posts
  'auth-not-found': 'Author not found',
}

export type ErrorMessagesMapping = typeof baseErrorMessages
