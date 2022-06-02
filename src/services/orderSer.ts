import ProductMod from '../models/productMod';
import OrderMod from '../models/orderMod';
import { IOrdersProducts } from '../interface/orders.interface';

export default class OrderSer {
  static async getAllOrders(): Promise<IOrdersProducts[]> {
    const allOrders = await OrderMod.getAll();
    const allProducts = await ProductMod.getAll();

    const ordersWithProductsIds: IOrdersProducts[] = allOrders.map((i) => {
      const arrayFilter = allProducts.filter((j) => j.orderId === i.id);
      const arrayProdctsId = arrayFilter.map((j) => j.id);

      const obj = {
        id: i.id,
        userId: i.userId,
        productsIds: arrayProdctsId,
      };

      return obj;
    });

    return ordersWithProductsIds;
  }
}
