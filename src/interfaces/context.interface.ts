import { UserDoc } from '@models/User.model';

export interface Context {
  user?: UserDoc;
  auth?: boolean;
}
