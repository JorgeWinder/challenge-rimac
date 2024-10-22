import type { AppProps } from 'next/app'
// import { AppLayout } from '@app/app/layout'
import '@app/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}