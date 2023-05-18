import { SearchResponse } from "../../interface/SearchResponse";

export class SearchResult {
  responseList: SearchResponse[];
  numOfGuests: number;
  start: string;
  end: string;

  constructor(responseList: SearchResponse[], guests: number, start: string, end: string) {
    this.responseList = responseList;
    this.numOfGuests = guests;
    this.start = start;
    this.end = end;
  }
}
