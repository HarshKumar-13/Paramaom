import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  "https://countries.trevorblades.com/";

export const client = new ApolloClient({
  link: new HttpLink({
    uri,
  }),
  cache: new InMemoryCache(),
});
