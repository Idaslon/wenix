export const authConfig = {
  secret: process.env.AUTH_SECRET as string,

  /** Example: "2 days", "10h", "7d". More info: [zeit/ms](https://github.com/zeit/ms.js). */
  expiresIn: '1d',
}
