import { Router } from 'express';
import UserCon from '../controllers/userCon';
import Mid from '../middlewares/middleware';

const route = Router();
const userCon = new UserCon();
const mid = new Mid();

route.post(
  '/',
  Mid.bodyLoginUser.bind(mid),
  userCon.loginUser.bind(userCon),
);

export default route;
