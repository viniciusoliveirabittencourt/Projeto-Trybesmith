import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IProductGet, IProductPost } from '../interfaces/products.interface';

export default class ProductMod {
  static async getAll(): Promise<IProductGet[]> {
    const [products] = await conn.execute(
      'SELECT * FROM Trybesmith.Products;',
    );

    return products as IProductGet[];
  }

  static async creatProduct({ name, amount }: IProductPost): Promise<IProductGet> {
    const [createdProduct] = await conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return { id: createdProduct.insertId, name, amount };
  }

  static async putProductsOrders(orderId: number, productId: number)
    :Promise<number> {
    const [putProduct] = await conn.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [orderId, productId],
    );

    return putProduct.affectedRows;
  }
}
