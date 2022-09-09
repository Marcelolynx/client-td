import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

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
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
