import { Position } from "./position";

export class Scooter {
  constructor(
    public id: string,
    public batteryLevel: number,
    public position: Position,
    public locked: boolean,
    public rented: boolean,
    public enabled: boolean,
    public standby: boolean
  ) {}

  canBeRented(): boolean {
    return !this.rented && this.enabled && !this.standby
  }
}
