import { SearchResponse } from "../../interface/SearchResponse";

export class SearchResult {
  responseList: SearchResponse[]

  constructor(responseList: SearchResponse[]) {
    this.responseList = responseList;
  }
}
