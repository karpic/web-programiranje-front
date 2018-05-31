import { OrderItemCreation } from "./orderItemCreation.model";

export class OrderView {
  constructor(
    public id: number,
    public orderItems: Array<OrderItemCreation>,
    public dateOrdered: Date,
    public userUsername: string,
    public delievererUsername: string,
    public status: string,
    public note: string,
    public deleted: boolean
  ){}
}
