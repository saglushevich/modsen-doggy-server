import { RESTDataSource } from "apollo-datasource-rest";

export class DogAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.api-ninjas.com/v1/dogs'
  }
  
  async getDogs({ breed }) {
    const response = await this.get(`?name=${breed}`, undefined, {
      headers: {
        "X-Api-Key": "FZvdT5D6gVW1zV6qMdv5tw==1H3a9TU340W7LAKZ",
        "content-type": "application/json"
      },
    })

    return response;
  }
}