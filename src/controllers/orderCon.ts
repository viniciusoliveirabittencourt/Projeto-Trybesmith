import { Request, Response } from 'express';
import { IBodyProductIds, IHeaders } from '../interface/middlewares.interface';
import OrderSer from '../services/orderSer';

export default class OrderCon {
  static async getAllOrders(_req: Request, res: Response): Promise<Response> {
    const orders = await OrderSer.getAllOrders();

    return res.status(200).send(orders);
  }

  static async postOrder(req: Request, res: Response) {
    const { authorization } = req.headers as IHeaders;
    const { productsIds } = req.body as IBodyProductIds;

    const returnPost = await OrderSer
      .resgisterOrderService(authorization, productsIds);

    return res.status(201).send(returnPost);
  }
}
