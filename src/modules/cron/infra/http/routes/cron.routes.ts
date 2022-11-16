import { Router } from 'express';
import CronController from '../controllers/CronController';

const cronRouter = Router();
const cronController = new CronController();

cronRouter.get(
  '/start',
  cronController.start,
);

export default cronRouter;
