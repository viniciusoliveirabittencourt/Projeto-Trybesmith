import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import { IProductGet, IProductPost } from '../interface/products.interface';

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
}
