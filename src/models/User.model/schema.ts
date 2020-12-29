import { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

export const UserSchema: Schema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

UserSchema.plugin(uniqueValidator);
