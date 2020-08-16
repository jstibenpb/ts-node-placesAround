import { Request, Response, Application } from 'express';

import status from '../src/api/status/routes';

function routes (app: Application): void {
  app.use('/status', status);
  // app.use('/users', getGeoip, users);
  // app.use('/places', getGeoip, checkBlacklist, checkIfAuthenticated, places);
  app.use('*', (req: Request, res: Response) => {
    res.send('Not found!!!');
  });
};

export default routes;
