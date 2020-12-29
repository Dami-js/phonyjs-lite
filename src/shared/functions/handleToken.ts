import { JWT_SECRET } from '@config/index';
import jwt from 'jsonwebtoken';

export default function handleToken() {
  return Object.freeze({
    getToken(payload, time = '1h') {
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: time });
      return token;
    },

    verifyToken(token: string) {
      const decoded = jwt.verify(token, JWT_SECRET);
      return decoded;
    },
  });
}
