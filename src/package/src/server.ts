import App from 'app';
import routes from 'routes';

const _App = new App(routes);
const PORT = 5000;

const boostrap = async () => {
  _App.listen(PORT);
};

boostrap();
