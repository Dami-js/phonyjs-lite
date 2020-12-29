import { MONGODB_URI } from '@config/index';
import { ConnectionOptions, connect } from 'mongoose';

const mongoDB = async (): Promise<void> => {
  try {
    const mongoURI: string = MONGODB_URI;
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };

    await connect(mongoURI, options);

    console.info('Database Connected');
  } catch (err) {
    console.error(err.message, 'Database connection');
    // Exit process with failure
    process.exit(1);
  }
};

export default mongoDB;
