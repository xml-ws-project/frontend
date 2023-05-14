import { PaymentType } from './../enum/PaymentType.enum';
export interface AccommodationRequest {
  name: string,
  hostId: string,
  country: string,
  city: string,
  street: string,
  number: string,
  postalCode: string,
  images: string[],
  minGuests: number,
  maxGuests: number,
  paymentType: PaymentType,
  automaticAcceptance: boolean,
  regularPrice: number,
  benefitsIds: string[],
  start: Date,
  end: Date
}
