import express, { Request, Response } from 'express';

import { getStatus } from './controller';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  getStatus(res);
});

export default router;
