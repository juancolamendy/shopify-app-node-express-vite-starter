import { useAppBridge } from "@shopify/app-bridge-react";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { authFetch } from "../../utils";

export function GraphQLProvider({ children }) {
  const app = useAppBridge();

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "/api/graphql",
      credentials: "include",
      fetch: authFetch(app),
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
