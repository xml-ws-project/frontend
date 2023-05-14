import { PaymentType } from "../enum/PaymentType.enum";
import { AdditionalBenefitResponse } from "./AdditionalBenefitResponse";

export interface AccommodationResponse {
  id: string,
  name: string,
  hostId: string,
  country: string,
  city: string,
  street: string,
  number: string,
  postalCode: string,
  benefits: AdditionalBenefitResponse[],
  images: string[],
  minGuests: number,
  maxGuests: number,
  paymentType: PaymentType,
  automaticAcceptance: boolean,
  regularPrice: number
}
