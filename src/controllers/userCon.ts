import { Response, Request } from 'express';
import { IReturnValidate } from '../interfaces/middlewares.interface';
import { ILoginUser, IUser } from '../interfaces/users.interface';
import UserSer from '../services/userSer';

export default class UserCon {
  private uS = new UserSer();

  public async postUser(req: Request, res: Response): Promise<Response> {
    const bodyDes: IUser = req.body;
    const { status, message }: IReturnValidate = await this.uS.cadastrarUsuario(bodyDes);

    return res.status(status).send({ token: message });
  }

  public async loginUser(req: Request, res: Response) {
    const { username, password }: ILoginUser = req.body;
    const { status, message }: IReturnValidate = await this.uS.loginUsuario(username, password);

    if (status === 200) {
      return res.status(status).send({ token: message });
    }

    return res.status(status).send({ message });
  }
}
