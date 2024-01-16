import { Router } from 'express';

import exampleController from './app/example/exampleController';
import bankAccountController from './app/controller/bankAccountController';

const routes = new Router();

routes.post('/create-products', bankAccountController.createProduct)
routes.delete('/delete-products', bankAccountController.deleteProduct)
routes.get('/list', bankAccountController.listAllProducts)
routes.post('/update-products', bankAccountController.updateProduct)

export default routes;
