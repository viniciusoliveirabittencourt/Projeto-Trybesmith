import { Request, Response } from 'express';
import OrderSer from '../services/orderSer';

export default class OrderCon {
  static async getAllOrders(_req: Request, res: Response): Promise<Response> {
    const orders = await OrderSer.getAllOrders();

    return res.status(200).send(orders);
  }
}
