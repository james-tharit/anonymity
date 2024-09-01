import { gql } from "@apollo/client";
import { createApolloClient } from "./apollo-client";

export type ArticleType = {
    id: string
    title: string
    caption: string
    type: string
    link: string
    date: string
}

export const allArticles = async () => {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
        query Article {
            articles {
              id
              title
              caption
              type
              link
              date
            }
          }
      `,
    })

    return data.articles
}