import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://localhost:5423/query",
        cache: new InMemoryCache(),
    });
};