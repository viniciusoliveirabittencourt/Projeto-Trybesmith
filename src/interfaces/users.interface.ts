export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface ILoginUser {
  username: string;
  password: string;
}
