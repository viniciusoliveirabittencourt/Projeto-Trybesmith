import UserMod from '../models/userMod';
import { IUser } from '../interface/users.interface';
import { IReturnValidate } from '../interface/middlewares.interface';
import TokenClass from '../middlewares/jwt';

export default class UserSer {
  private tokenFuncs = new TokenClass();

  public async cadastrarUsuario(user: IUser): Promise<IReturnValidate> {
    const cadaUsuario = await UserMod.insertUser(user);

    if (cadaUsuario !== 1) {
      return { status: 500, message: 'Erro no banco de dados' };
    }

    const newUserToken = this.tokenFuncs.createToken(user);

    return { status: 201, message: newUserToken };
  }

  public async loginUsuario(userName: string, passw: string): Promise<IReturnValidate> {
    const user = await UserMod.getUser(userName);

    if (!user || passw !== user.password) {
      return { status: 401, message: 'Username or password invalid' };
    }

    const objUser: IUser = {
      id: user.id,
      username: user.username,
      classe: user.classe,
      level: user.level,
      password: user.password,
    };

    const userToken = this.tokenFuncs.createToken(objUser);

    return { status: 200, message: userToken };
  }
}
