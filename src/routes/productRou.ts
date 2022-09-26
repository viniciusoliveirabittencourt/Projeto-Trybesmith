import { Router } from 'express';
import ProducCon from '../controllers/productCon';
import Middleware from '../middlewares/middleware';

const pC = new ProducCon();
const mid = new Middleware();

const route = Router();

route.get('/', ProducCon.getAll.bind(pC));
route.post('/', Middleware.verifyBodyPostProduct.bind(mid), ProducCon.postProduct.bind(pC));

export default route;
