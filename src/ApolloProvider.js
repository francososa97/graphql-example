// src/ApolloProvider.js

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql',
  cache: new InMemoryCache()
});

const ApolloProvider = ({ children }) => (
  <Provider client={client}>
    {children}
  </Provider>
);

export default ApolloProvider;
