import { Rent, RentCancellationInfo, RentCancellationReason, RentConfirmationInfo, RentStopInfo, RentStopReason } from "src/app/model/rent"

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

  toRentModel(): Rent {
    return new Rent(
      this.id,
      this.scooterId,
      this.customerId,
      this.requestTimestamp,
      this.confirmationInfo ? new RentConfirmationInfo(this.confirmationInfo.timestamp) : undefined,
      this.cancellationInfo ? new RentCancellationInfo(this.cancellationInfo.reason) : undefined,
      this.stopInfo ? new RentStopInfo(this.stopInfo.reason, this.stopInfo.timestamp) : undefined)
  }
}
