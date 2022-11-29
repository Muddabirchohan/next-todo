import '../styles/globals.css'
import type { AppProps } from 'next/app';

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
});



export default function App({ Component, pageProps }: AppProps) {
  return  ( 
  <>
  <ApolloProvider client={client}>
  <Component {...pageProps} client={client} />
  </ApolloProvider>
  </>
)}
