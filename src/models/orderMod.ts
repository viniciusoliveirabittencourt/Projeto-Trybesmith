import conn from './connection';
import { IOrders } from '../interface/orders.interface';

export default class OrderMod {
  static async getAll(): Promise<IOrders[]> {
    const [orders] = await conn.execute(
      'SELECT * FROM Trybesmith.Orders;',
    );

    return orders as IOrders[];
  }
}
