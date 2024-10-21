import type { AppProps } from 'next/app'
import { FC, ReactNode } from 'react'
import { NextPage } from 'next'
// import { AppLayout } from '@app/app/layout'
import '@app/styles/globals.css';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: FC<{ children: ReactNode }>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // const Layout = Component.layout

  return (
        <Component {...pageProps} />
  )
}

export default MyApp