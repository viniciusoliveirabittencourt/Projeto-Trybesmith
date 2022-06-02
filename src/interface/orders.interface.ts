export interface IOrders {
  id: number;
  userId: number;
}

export interface IOrdersProducts extends IOrders {
  id: number;
  userId: number;
  productsIds: number[];
}
