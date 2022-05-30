import { sign, verify, SignOptions, JwtPayload } from "jsonwebtoken";
import IUser from "../interface/users.interface";

export default class TokenClass {
  private JWT_SECRET = 'SenhaSuperSecretaUau}@2ehuughawgfabywgafahdiaw';

  public createToken(user: IUser): string {
    const jwtConfig: SignOptions = {
      algorithm: 'HS256',
    };

    return sign({ data: user }, this.JWT_SECRET, jwtConfig);
  };

  public verifyToken(token: string): string | JwtPayload | undefined {
    try {
      return verify(token, this.JWT_SECRET);
    } catch (e: unknown) {
      return undefined;
    }
  };
};
