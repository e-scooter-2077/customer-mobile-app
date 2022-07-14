export class ScooterDTO {
  constructor(
    public readonly id: string,
    public readonly batteryLevel: number,
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly connected: boolean,
    public readonly rented: boolean,
    public readonly enabled: boolean,
    public readonly locked: boolean,
    public readonly standby: boolean,
  ) {}
}
