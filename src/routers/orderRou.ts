import { Router } from 'express';
import OrderCon from '../controllers/orderCon';
import Middleware from '../middlewares/middleware';

const route = Router();

route.get('/', OrderCon.getAllOrders);
route.post(
  '/',
  Middleware.validToken,
  Middleware.validPostOrdersBody,
  OrderCon.postOrder,
);

export default route;
