import { Request, Response } from 'express';
import ProductSer from '../services/productSer';
import { IProductGet, IProductPost } from '../interface/products.interface';

export default class ProducCon {
  static async getAll(_req: Request, res: Response): Promise<Response> {
    const returnPs: IProductGet[] = await ProductSer.getAll();

    return res.status(200).send(returnPs);
  }

  static async postProduct(req: Request, res: Response): Promise<Response> {
    const bodyDes: IProductPost = req.body;
    const returnPs: IProductGet = await ProductSer.createdProduct(bodyDes);

    return res.status(201).send(returnPs);
  }
}
