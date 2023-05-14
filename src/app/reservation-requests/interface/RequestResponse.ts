import { AccommodationInfo } from './AccommodationInfo'

export interface RequestResponse {
  id: string
  numOfGuests: number
  status: string
  accomInfo: AccommodationInfo
  userId: string
  start: Date
  end: Date
}
