import ProductMod from '../models/productMod';
import OrderMod from '../models/orderMod';
import { IOrders, IOrdersProducts } from '../interface/orders.interface';
import { IProductGet } from '../interface/products.interface';

export default class OrderSer {
  static async getAllOrders(): Promise<IOrdersProducts[]> {
    const allOrders: IOrders[] = await OrderMod.getAll();
    const allProducts: IProductGet[] = await ProductMod.getAll();

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
