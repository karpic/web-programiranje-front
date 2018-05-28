export class ItemView {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public type: string,
    public quantity: number,
    public timesOrdered: number,
    public deleted: boolean,
    public restaurantId: number
  ) {}
}
