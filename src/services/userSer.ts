import UserMod from "../models/userMod";
import IUser from '../interface/users.interface';
import IReturnValidate from "../interface/middlewares.interface";
import TokenClass from "../middlewares/jwt";

export default class UserSer {
  private tokenFuncs = new TokenClass();

  public async cadastrarUsuario(user: IUser): Promise<IReturnValidate> {
    const cadaUsuario = await UserMod.insertUser(user);

    if (cadaUsuario !== 1) {
      return { status: 500, message: 'Erro no banco de dados' };
    }

    const newUserToken = this.tokenFuncs.createToken(user);

    return { status: 201, message: newUserToken };
  };
};
