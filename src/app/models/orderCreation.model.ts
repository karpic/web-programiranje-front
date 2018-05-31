import { OrderItemCreation } from "./orderItemCreation.model";

export class OrderCreation {
  constructor(
    public orderItems: Array<OrderItemCreation>,
    public dateOrdered: Date,
    public userUsername: string,
    public delievererUsername: string,
    public status: string,
    public note: string,
    public deleted: boolean
  ){}
}
