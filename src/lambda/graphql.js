import { ApolloServer } from "apollo-server-lambda";

import { DogAPI } from "./datasource";
import resolvers from "./resolvers";
import { typeDefs } from "./schema";


const getHandler = (event, context) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: true,
    cache: "bounded",
    playground: true,
    dataSources: () => ({
      dogAPI: new DogAPI(),
    }),
  });

  const graphqlHandler = server.createHandler();

  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context);
}
exports.handler = getHandler;