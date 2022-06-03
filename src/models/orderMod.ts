import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IOrders } from '../interface/orders.interface';

export default class OrderMod {
  static async getAll(): Promise<IOrders[]> {
    const [orders] = await conn.execute(
      'SELECT * FROM Trybesmith.Orders;',
    );

    return orders as IOrders[];
  }

  static async registerOrder(userId: number): Promise<ResultSetHeader> {
    const [orderRegister] = await conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    return orderRegister;
  }
}
