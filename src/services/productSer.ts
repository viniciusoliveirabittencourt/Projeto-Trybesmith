import ProductMod from '../models/productMod';
import { IProductGet, IProductPost } from '../interface/products.interface';

export default class ProductSer {
  static async getAll(): Promise<IProductGet[]> {
    const returnAll = await ProductMod.getAll();

    return returnAll;
  }

  static async createdProduct(product: IProductPost): Promise<IProductGet> {
    const returnpM = await ProductMod.creatProduct(product);

    return returnpM;
  }
}
