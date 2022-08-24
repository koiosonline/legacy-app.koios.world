import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const APIURL = 'https://api.lens.dev';

export const ConnectedApolloProvider: React.FC = ({ children }) => {

  const apolloClient = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        errorPolicy: 'all',
      },
      watchQuery: {
        errorPolicy: 'all',
      },
    },
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
