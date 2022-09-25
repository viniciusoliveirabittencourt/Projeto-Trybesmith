import ProductMod from '../models/productMod';
import OrderMod from '../models/orderMod';
import { IOrders } from '../interfaces/orders.interface';
import TokenClass from '../middlewares/jwt';
import { IToken } from '../interfaces/middlewares.interface';

export default class OrderSer {
  static async getAllOrders(): Promise<IOrders[]> {
    const allOrders = await OrderMod.getAll();
    const allProducts = await ProductMod.getAll();

    const ordersWithProductsIds: IOrders[] = allOrders.map((i) => {
      const arrayFilter = allProducts.filter((j) => j.orderId === i.id);
      const arrayProdctsId = arrayFilter.map((j) => j.id);

      return {
        id: i.id,
        userId: i.userId,
        productsIds: arrayProdctsId,
      };
    });

    return ordersWithProductsIds;
  }

  static async resgisterOrderService(token: string, productsIds: number[])
    :Promise<IOrders> {
    const tokenFuncs = new TokenClass();
    const { data: { id } } = tokenFuncs.verifyToken(token) as IToken;
    const { insertId } = await OrderMod.registerOrder(id);

    const mapProducts = productsIds.map(async (i) => ProductMod.putProductsOrders(insertId, i));

    await Promise.all(mapProducts);

    return { userId: id, productsIds };
  }
}
