import { Router } from 'express';
import cronRouter from '@modules/cron/infra/http/routes/cron.routes';
import healthRouter from './health.routes';

const routes = Router();

routes.use('/cron', cronRouter);
routes.use(healthRouter);


export default routes;
