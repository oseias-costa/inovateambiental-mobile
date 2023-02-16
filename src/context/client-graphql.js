import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://inovateback-git-draft-hardcore-solomon-oseias-costa.vercel.app/graphql',
    cache: new InMemoryCache()
})