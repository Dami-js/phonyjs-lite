import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import App from './app';
import resolvers from '@resolvers/index';
import { API_URL, PORT } from '@config/index';
import { ApolloContext } from '@middlewares/apollo-context.middleware';

const _App = new App();

const boostrap = async () => {
  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
    playground: { endpoint: API_URL },
    context: ApolloContext,
  });

  server.applyMiddleware({ app: _App.app, path: API_URL });

  _App.listen(PORT);
};

boostrap();
