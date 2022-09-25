export interface IReturnValidate {
  status: number;
  message: string;
}

export interface IValidAttString {
  att: string;
  attName: string;
  lengthString: number;
}

export interface IValidAttNumber {
  att: number;
  attName: string;
  sizeNumber: number;
}

export interface IToken {
  data: {
    id: number;
    username: string;
    classe: string;
    level: number;
    password: string;
  }
}

export interface IHeaders {
  authorization: string;
}

export interface IBodyProductIds {
  productsIds: number[];
}
