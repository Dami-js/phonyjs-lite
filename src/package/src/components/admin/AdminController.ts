import { Request, Response } from 'express';
import hash from 'lib/helpers/hash';

export default class AdminController {
  constructor() {}

  public index(req: Request, res: Response) {
    const hashed = hash('dfgduhvs').getHash();
    res.json({ message: hashed });
  }
}
