import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Dog {
    name: String!
    image_link: String!
    energy: Int!
    max_life_expectancy: Int!
    good_with_strangers: Int!
    good_with_other_dogs: Int!
  }
  type Query {
    dogs(breed: String!): [Dog]
  }
`;