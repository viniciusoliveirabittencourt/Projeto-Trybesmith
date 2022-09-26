import { Router } from 'express';
import UserCon from '../controllers/userCon';
import Mid from '../middlewares/middleware';

const route = Router();
const userCon = new UserCon();
const mid = new Mid();

route.post(
  '/',
  Mid.verifyUsername.bind(mid),
  Mid.verifyPassword.bind(mid),
  Mid.verifyLevel.bind(mid),
  Mid.verifyClasse.bind(mid),
  userCon.postUser.bind(userCon),
);

route.post(
  '/login',
  Mid.bodyLoginUser.bind(mid),
  userCon.loginUser.bind(userCon),
);

export default route;
