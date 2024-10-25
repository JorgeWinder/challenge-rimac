import type { AppProps } from 'next/app'
// import { AppLayout } from '@app/app/layout'
import '@app/styles/globals.css';

import { FormProvider } from '@app/features/contacts/contexts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}