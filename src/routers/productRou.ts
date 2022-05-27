import { Router } from "express";
import producCon from "../controllers/productCon";

const pC = new producCon();
const route = Router();

route.get('/', pC.getAll);
route.post('/', pC.postProduct);

export default route;
