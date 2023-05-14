import { PeriodType } from "../enum/PeriodType.enum";

export interface SpecialPeriodRequest {
  accommodationId: string,
  specialPeriodStart: string,
  specialPeriodEnd: string,
  specialPrice: number,
  periodType: PeriodType
}
