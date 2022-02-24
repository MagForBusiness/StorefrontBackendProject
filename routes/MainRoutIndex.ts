import express from 'express';
// import { image_disply } from './api/displyimageRout';
// import rout2 from './api/rout2';

const router = express.Router();
// router.use('/image-disply', image_disply);
// router.use('/rout2', rout2);

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('router Connect!');
});
export default router;
