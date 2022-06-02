import { Router } from 'express';
import OrderCon from '../controllers/orderCon';

const route = Router();

route.get('/', OrderCon.getAllOrders);

export default route;
