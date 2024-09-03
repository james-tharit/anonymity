import { gql } from "@apollo/client";
import { createApolloClient } from "./apollo-client";

export type ArticleType = {
  id: string
  title: string
  body: string
  articleType: string
  views: string
  likes: string
  shares: string
}

export const allArticles = async () => {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
        query Article {
            articles {
              id
              title
              body
              articleType
              likes
              views
              shares
              created
            }
          }
      `,
  })

  return data.articles
}