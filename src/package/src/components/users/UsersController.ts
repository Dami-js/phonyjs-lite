import { Request, Response } from 'express';

export default class UserController {
  constructor() {}

  /**
   * index
   */
  public async index(req: Request, res: Response) {
    res.json({ data: 'user controller' });
  }
}
