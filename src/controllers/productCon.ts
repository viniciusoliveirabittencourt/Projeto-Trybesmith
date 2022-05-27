import productSer from "../services/productSer";
import { Request, Response } from 'express';
import { IProductGet, IProductPost } from "../interface/products.interface";

export default class producCon {
  private pS = new productSer();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const returnPs: IProductGet[] = await this.pS.getAll();

    return res.status(200).send(returnPs);
  };

  public postProduct = async (req: Request, res: Response) => {
    const body: IProductPost = req.body;
    const returnPs: IProductGet = await this.pS.createdProduct(body);

    return res.status(201).send(returnPs);
  };
};
