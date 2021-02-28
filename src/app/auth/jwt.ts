import jwt from 'jsonwebtoken';

import { User } from '../entity/user.entity';

export function sign(user: User): string {
  const secret = process.env.APP_SECRET || 'xHBpZ5Kbac';
  const token = jwt.sign({ uuid: user.uuid }, secret, { expiresIn: '1d' });
  return token;
}
