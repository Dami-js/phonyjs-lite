import express from 'express';
import { HomeController } from '@controllers/HomeController';

export class HomeRoute extends HomeController {
  public path = '/';
  public router = express.Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.index);
  }
}
