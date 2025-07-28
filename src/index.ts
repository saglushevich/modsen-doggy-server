import { ApolloServer } from 'apollo-server-lambda';
import { gql } from 'graphql-tag';

const typeDefs = gql`
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
        dogs: async (_: unknown, { name }: { name: string }) => {
            try {
                const response = await fetch(
                    `https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(name)}`,
                    {
                        headers: {
                            'X-Api-Key': 'FZvdT5D6gVW1zV6qMdv5tw==1H3a9TU340W7LAKZ',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`API request failed: ${response.status}`);
                }

                return await response.json();
            } catch (error) {
                console.error('Error fetching dog:', error);
                throw new Error('Failed to fetch dog data');
            }
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: ({ event, context }: { event: unknown; context: unknown }) => ({
        headers: (event as { headers: unknown }).headers,
        functionName: (context as { functionName: string }).functionName,
        event,
        context,
    }),
});

// For local development
if (process.env['NODE_ENV'] !== 'production') {
    const port = process.env['PORT'] || 4000;
    // @ts-ignore
    server.listen({ port }).then(({ url }: { url: string }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
}

// For Netlify serverless functions
export const handler = server.createHandler(); 