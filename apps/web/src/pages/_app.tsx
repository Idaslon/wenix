import '@wenix/ui/styles/global.css'

import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { GlobalProviders } from '../contexts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProviders>
      <Header />
      <Component {...pageProps} />
    </GlobalProviders>
  )
}
