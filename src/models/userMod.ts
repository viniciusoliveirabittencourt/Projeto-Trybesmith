import { ResultSetHeader } from 'mysql2';
import conn from './connection';
import IUser from '../interface/users.interface';

export default class UserMod {
  static async insertUser(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;

    const [insertUser] = await conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );

    return insertUser.affectedRows;
  }
};
