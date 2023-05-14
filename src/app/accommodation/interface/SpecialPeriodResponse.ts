import { PeriodType } from "../enum/PeriodType.enum";

export interface SpecialPeriodResponse {
  id: string,
  accommodationId: string,
  specialPrice: number,
  periodType: PeriodType
}
