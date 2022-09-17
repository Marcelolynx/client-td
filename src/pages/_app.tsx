import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import NextNProgress from 'nextjs-progressbar'
import { Provider as AuthProvider } from 'next-auth/client'

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      console.log(latitude, longitude)
    })
  }, [])

  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Head>
            <title>Terapia de Todos</title>
            <link rel="shortcut icon" href="/img/favicon.png" />
            <link rel="apple-touch-icon" href="/img/favicon.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="Terapia de Todos - O Melhor Clube de Benefícios do Brasil"
            />
          </Head>
          <GlobalStyles />
          <NextNProgress
            color="#C5A7C5"
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
