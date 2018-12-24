import { Router } from 'express';
import * as TodoController from './controller';

const routes = Router();

routes.get('/items', TodoController.fetchItems); 

routes.post('/items', TodoController.addItem);

routes.delete('/items', TodoController.deleteItem);


export default routes;