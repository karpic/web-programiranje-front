export class ItemCreation {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public type: string,
    public quantity: number,
    public timesOrdered: number,
    public deleted: boolean
  ) {}
}
