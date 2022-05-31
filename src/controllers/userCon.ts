import { Response, Request } from 'express';
import IUser from '../interface/users.interface';
import { IReturnValidate } from '../interface/middlewares.interface';
import UserSer from '../services/userSer';

export default class UserCon {
  private uS = new UserSer();

  public async postUser(req: Request, res: Response): Promise<Response> {
    const bodyDes: IUser = req.body;
    const insertUser: IReturnValidate = await this.uS.cadastrarUsuario(bodyDes);

    return res.status(insertUser.status).send({ token: insertUser.message });
  }
}
