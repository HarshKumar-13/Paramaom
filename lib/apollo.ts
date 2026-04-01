import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://paramaom-cms.local/graphql",
  }),
  cache: new InMemoryCache(),
});