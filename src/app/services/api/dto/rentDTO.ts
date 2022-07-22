import { RentCancellationReason, RentStopReason } from "src/app/model/rent"

export class RentDTO {
  constructor(
    public readonly id: string,
    public readonly scooterId: string,
    public readonly customerId: string,
    public readonly requestTimestamp: Date,
    public readonly confirmationInfo?: {
      timestamp: Date
    },
    public readonly cancellationInfo?: {
      reason: RentCancellationReason
    },
    public readonly stopInfo?: {
      reason: RentStopReason,
      timestamp: Date
    },
  ) {}
}
