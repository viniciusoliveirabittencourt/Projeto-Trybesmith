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
