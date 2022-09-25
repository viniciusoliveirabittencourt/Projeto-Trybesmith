export interface IProductGet {
  id: number;
  name: string;
  amount: string;
  orderId?: number | null;
}

export interface IProductPost {
  name: string;
  amount: string;
}
