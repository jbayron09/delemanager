import {ApolloClient, InMemoryCache} from "@apollo/client";
import {LOCAL_STORAGE_AUTH_TOKEN_KEY} from "constants/localStorage";

export const client = new ApolloClient({
    uri: `${process.env.REACT_APP_API_URL}/graphql/`,
    headers: {
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY)}`
    },
    cache: new InMemoryCache(),
});

export default client