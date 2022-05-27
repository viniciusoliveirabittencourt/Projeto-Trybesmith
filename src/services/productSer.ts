import productMod from "../models/productMod";
import { IProductGet, IProductPost } from "../interface/products.interface";

export default class productSer {
  private pM = new productMod();

  public getAll = async (): Promise<IProductGet[]> => {
    const returnAll = await this.pM.getAll();

    return returnAll;
  };

  public createdProduct = async (product: IProductPost): Promise<IProductGet> => {
    const returnpM = await this.pM.creatProduct(product);

    return returnpM;
  };
};
