export class Rent {
  constructor(
    public readonly id: string,
    public readonly scooterId: string,
    public readonly customerId: string,
    public readonly timestamp: Date,
    public readonly confirmationInfo?: RentConfirmationInfo,
    public readonly cancellationInfo?: RentCancellationInfo,
    public readonly stopInfo?: RentStopInfo
  ) {}
}

export class RentConfirmationInfo {
  constructor(
    public readonly timestamp: Date
  ) {}
}

export class RentCancellationInfo {
  constructor(
    public readonly reason: RentCancellationReason
  ) {}
}

export enum RentCancellationReason {
  CreditInsufficient,
  ScooterUnavailable,
  InternalError
}

export class RentStopInfo {
  constructor(
    public readonly reason: RentStopReason,
    public readonly timestamp: Date
  ) {}
}

export enum RentStopReason {
  StoppedByCustomer,
    OutOfArea,
    CreditExhausted,
    Standby,
    Disabled,
    NotRentable
}


