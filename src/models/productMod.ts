import conn from './connection';
import { IProductGet, IProductPost } from '../interface/products.interface';
import { ResultSetHeader } from 'mysql2';

export default class productMod {
  public getAll = async (): Promise<IProductGet[]> => {
    const [products] = await conn.execute(
      `SELECT * FROM Trybesmith.Products;`,
    );

    return products as IProductGet[];
  };

  public creatProduct = async ({ name, amount }: IProductPost): Promise<IProductGet> => {
    const [createdProduct] = await conn.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);`,
      [name, amount],
    );

    return { id: createdProduct.insertId, name, amount };
  };
};
 