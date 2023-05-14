import { AccommodationResponse } from "./AccommodationResponse";

export interface SearchResponse {
  accommodation: AccommodationResponse,
  unitPrice: number,
  totalPrice: number
}
