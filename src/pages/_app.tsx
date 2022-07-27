import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      console.log(latitude, longitude)
    })
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Terapia de Todos - Clube de Benefícios</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
