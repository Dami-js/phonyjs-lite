import 'reflect-metadata';
import express, { Application } from 'express';
import { IRoute } from 'lib/types/IRoute';

// init app

class App {
  public app: Application;
  constructor(routes: Array<IRoute>) {
    this.app = express();
    this.initRoutes(routes);
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  public initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public initRoutes(routes: Array<IRoute>) {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }
}

export default App;
