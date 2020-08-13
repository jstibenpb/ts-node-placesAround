import { Response } from 'express';

export function getStatus (res: Response): Response {
  return res.status(200).json({ healthy: true });
};
