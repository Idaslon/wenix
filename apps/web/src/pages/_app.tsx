import '@wenix/ui/styles/global.css'

import type { AppProps } from 'next/app'
import { GlobalProviders } from '../contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  )
}
