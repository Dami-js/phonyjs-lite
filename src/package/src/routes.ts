import { AdminRouter } from 'components/admin/AdminRouter';
import { UserRouter } from 'components/users/UsersRouter';
import express, { Router } from 'express';
import { IRoute } from 'lib/types/IRoute';

// ROUTES
const router: Router = express.Router();
const routes: Array<IRoute> = [new AdminRouter(router), new UserRouter(router)];

export default routes;
