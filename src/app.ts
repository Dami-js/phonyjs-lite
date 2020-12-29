import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoDB from '@db/mongodb';
import routes from './routes';
import exphbs from 'express-handlebars';
import { ROOT_PATH } from './config';
class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initDatabase();
    this.initRoutes();
  }

  public listen(port: string): void {
    const PORT = +port;
    this.app.listen(PORT, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  public initDatabase() {
    mongoDB();
  }

  public initRoutes() {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  public initMiddlewares() {
    // global middlewares goes here

    // Cors middleware
    this.app.use(
      cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
      }),
    );

    // Express body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // Static folders
    this.app.use(express.static(`${ROOT_PATH}/public`));
    this.app.set('views', `${ROOT_PATH}/views`);

    // Handlebars
    this.app.engine(
      '.hbs',
      exphbs({
        defaultLayout: 'main',
        extname: '.hbs',
        partialsDir: `${ROOT_PATH}/views/partials/`,
      }),
    );
    this.app.set('view engine', '.hbs');

    // Show routes called in console during development
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    }

    // Security
    if (process.env.NODE_ENV === 'production') {
      this.app.use(helmet());
    }
  }
}

export default App;
