import { AccommodationInfo } from './../../reservation-requests/interface/AccommodationInfo';
import { ReservationStatus } from "../enum/ReservationStatus.enum"

export interface ReservationResponse {
  id: string,
  numOfGuests: number,
  status: ReservationStatus,
  accomInfo: AccommodationInfo,
  userId: string,
  start: string,
  end: string
}
