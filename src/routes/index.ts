import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ name: 'Jefferson' }));

export default routes;
