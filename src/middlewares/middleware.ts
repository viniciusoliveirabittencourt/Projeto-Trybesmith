import { Response, Request, NextFunction } from 'express';
import { IProductPost } from '../interface/products.interface';
import IReturnValidate from '../interface/middlewares.interface';

export default class Middleware {
  static validAtt([att, attName]: [string, string]): IReturnValidate | void {
    if (!att) {
      return { status: 400, message: `"${attName}" is required` };
    }

    if (typeof att !== 'string') {
      return { status: 422, message: `"${attName}" must be a string` };
    }

    if (att.length < 3) {
      return { status: 422,
        message: `"${attName}" length must be at least 3 characters long`,
      };
    }
  }

  static verifyBodyPostProduct(req: Request, res: Response, next: NextFunction)
    : Response | void {
    const { name, amount }: IProductPost = req.body;
    const validName = Middleware.validAtt([name, 'name']);
    const validAmount = Middleware.validAtt([amount, 'amount']);

    if (validName) {
      return res.status(validName.status).send({ message: validName.message });
    }

    if (validAmount) {
      return res.status(validAmount.status).send({ message: validAmount.message });
    }

    next();
  }
}
