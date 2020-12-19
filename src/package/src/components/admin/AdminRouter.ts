import { Router } from 'express';
import AdminController from './AdminController';

export class AdminRouter extends AdminController {
  public path: string = '/';
  public router: Router;

  constructor(router) {
    super();
    this.initializeRoutes();
    this.router = router;
  }

  private initializeRoutes() {
    this.router.get(this.path, this.index);
  }
}
