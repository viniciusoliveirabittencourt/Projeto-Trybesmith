import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/products', routes.productRou);
app.use('/users', routes.userRou);
app.use('/orders', routes.orderRou);
app.use('/login', routes.loginRou);

export default app;
