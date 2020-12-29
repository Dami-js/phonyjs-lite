import commandLineArgs from 'command-line-args';
import dotenv from 'dotenv';

const options = commandLineArgs([
  {
    name: 'env',
    alias: 'e',
    defaultValue: 'production',
    type: String,
  },
]);

if (options.env === 'production') {
  dotenv.config();
} else {
  const result = dotenv.config({
    path: `./env/${options.env}.env`,
  });

  if (result.error) {
    throw result.error;
  }
}
