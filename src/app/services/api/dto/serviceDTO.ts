export class ServiceDTO<T> {
  constructor(
    public readonly meta: any,
    public readonly errors: any,
    public readonly data: T
  ) {}
}
