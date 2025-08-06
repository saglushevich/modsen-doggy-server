const query = {
  Query: {
    dogs: (_, { breed }, { dataSources }) =>
      dataSources.dogAPI.getDogs({ breed }),
  },
};

export default query;