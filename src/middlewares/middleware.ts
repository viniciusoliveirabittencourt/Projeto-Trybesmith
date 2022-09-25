import { Response, Request, NextFunction } from 'express';
import { IProductPost } from '../interfaces/products.interface';
import {
  IValidAttString,
  IReturnValidate,
  IValidAttNumber,
  IBodyProductIds,
} from '../interfaces/middlewares.interface';
import { IUser, ILoginUser } from '../interfaces/users.interface';
import TokenClass from './jwt';

export default class Middleware {
  static validAttStr({ att, attName, lengthString }: IValidAttString): IReturnValidate | void {
    if (!att) {
      return { status: 400, message: `"${attName}" is required` };
    }

    if (typeof att !== 'string') {
      return { status: 422, message: `"${attName}" must be a string` };
    }

    if (att.length <= lengthString) {
      return { status: 422,
        message: `"${attName}" length must be at least ${lengthString} characters long`,
      };
    }
  }

  static validAttNumber({ att, attName, sizeNumber }: IValidAttNumber): IReturnValidate | void {
    if (att === undefined) {
      return { status: 400, message: `"${attName}" is required` };
    }

    if (typeof att !== 'number') {
      return { status: 422, message: `"${attName}" must be a number` };
    }

    if (att <= sizeNumber) {
      return { status: 422,
        message: `"${attName}" must be greater than or equal to ${sizeNumber}`,
      };
    }
  }

  static verifyBodyPostProduct(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { name, amount }: IProductPost = req.body;
    const validName = Middleware
      .validAttStr({ att: name, attName: 'name', lengthString: 3 });
    const validAmount = Middleware
      .validAttStr({ att: amount, attName: 'amount', lengthString: 3 });

    if (validName) {
      return res.status(validName.status).send({ message: validName.message });
    }

    if (validAmount) {
      return res.status(validAmount.status).send({ message: validAmount.message });
    }

    next();
  }

  /*
  static verifyPostUser(req: Request, res: Response, next: NextFunction) {
    const obj: IUser = req.body;
  }
  */
  static verifyUsername(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { username }: IUser = req.body;

    const validUsername = Middleware
      .validAttStr({ att: username, attName: 'username', lengthString: 3 });

    if (validUsername) {
      return res.status(validUsername.status).send({ message: validUsername.message });
    }

    next();
  }

  static verifyClasse(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { classe }: IUser = req.body;

    const validClasse = Middleware
      .validAttStr({ att: classe, attName: 'classe', lengthString: 3 });

    if (validClasse) {
      return res.status(validClasse.status).send({ message: validClasse.message });
    }

    next();
  }

  static verifyLevel(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { level }: IUser = req.body;

    const validLevel = Middleware
      .validAttNumber({ att: level, attName: 'level', sizeNumber: 1 });

    if (validLevel) {
      console.log(validLevel);
      return res.status(validLevel.status).send({ message: validLevel.message });
    }

    next();
  }

  static verifyPassword(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { password }: IUser = req.body;

    const validPassword = Middleware
      .validAttStr({ att: password, attName: 'password', lengthString: 8 });

    if (validPassword) {
      return res.status(validPassword.status).send({ message: validPassword.message });
    }

    next();
  }

  static bodyLoginUser(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { username, password }: ILoginUser = req.body;

    if (!username) {
      return res.status(400).send({ message: '"username" is required' });
    }

    if (!password) {
      return res.status(400).send({ message: '"password" is required' });
    }

    next();
  }

  static validToken(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { authorization } = req.headers;
    const token = new TokenClass();

    if (!authorization) {
      return res.status(401).send({ message: 'Token not found' });
    }

    const tokenReturnValidate = token.verifyToken(authorization);

    if (!tokenReturnValidate) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    next();
  }

  static validPostOrdersBody(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { productsIds } = req.body as IBodyProductIds;
    console.log(typeof productsIds);

    if (!productsIds) {
      return res.status(400).send({ message: '"productsIds" is required' });
    }

    if (!Array.isArray(productsIds)) {
      return res.status(422).send({ message: '"productsIds" must be an array' });
    }

    if (productsIds.length === 0) {
      return res.status(422).send({ message: '"productsIds" must include only numbers' });
    }

    next();
  }
}
