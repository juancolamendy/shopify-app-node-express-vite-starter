import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { useAuthFetch } from "../../hooks";

export function GraphQLProvider({ children }) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "/api/graphql",
      credentials: "include",
      fetch: useAuthFetch(),
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
