import type { AppProps } from 'next/app'
import {ThemeProvider, theme} from 'legion-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
