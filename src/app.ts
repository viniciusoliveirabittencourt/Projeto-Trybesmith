import express from 'express';
import productRou from './routers/productRou';

const app = express();

app.use(express.json());

app.use('/products', productRou);

export default app;
