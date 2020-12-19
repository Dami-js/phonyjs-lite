import { Router } from 'express';
import UserController from './UsersController';

export class UserRouter extends UserController {
  public path: string = '/users';
  public router: Router;
  constructor(router: Router) {
    super();
    this.router = router;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.index);
  }
}
