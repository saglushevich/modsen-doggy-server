"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const graphql_tag_1 = require("graphql-tag");
const typeDefs = (0, graphql_tag_1.gql) `
    type Dog {
        name: String
        image_link: String
        energy: String
        min_life_expectancy: String
        good_with_strangers: String
        good_with_other_dogs: String
    }

    type Query {
        dogs(name: String!): [Dog]
    }
`;
const resolvers = {
    Query: {
        dogs: async (_, { name }) => {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(name)}`, {
                    headers: {
                        'X-Api-Key': 'FZvdT5D6gVW1zV6qMdv5tw==1H3a9TU340W7LAKZ',
                    },
                });
                if (!response.ok) {
                    throw new Error(`API request failed: ${response.status}`);
                }
                return await response.json();
            }
            catch (error) {
                console.error('Error fetching dog:', error);
                throw new Error('Failed to fetch dog data');
            }
        },
    },
};
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: ({ event, context }) => ({
        headers: event.headers,
        functionName: context.functionName,
        event,
        context,
    }),
});
if (process.env['NODE_ENV'] !== 'production') {
    const port = process.env['PORT'] || 4000;
    server.listen({ port }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
}
exports.handler = server.createHandler();
//# sourceMappingURL=apollo.js.map