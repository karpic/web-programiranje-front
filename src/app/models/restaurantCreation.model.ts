export class RestaurantCreation {
  constructor(
    public name: string,
    public address: string,
    public category: string,
    public dishes: Array<number>,
    public drinks: Array<number>,
    public deleted: boolean
  ){}
}
