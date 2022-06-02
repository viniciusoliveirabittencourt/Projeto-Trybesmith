import express from 'express';
import routes from './routers';

const app = express();

app.use(express.json());

app.use('/products', routes.productRou);
app.use('/users', routes.userRou);
app.use('/orders', routes.orderRou);

export default app;
