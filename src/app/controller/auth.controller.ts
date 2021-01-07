import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { sign } from '../auth/jwt';
import { User } from '../entity/user.entity';
import { BadRequestError } from '../error/badRequest.error';
import { UnauthorizedError } from '../error/unauthorized.error';
import { UserValidator } from '../validator/user.validator';

export class AuthController {
  private userValidator = new UserValidator();

  async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<unknown> | undefined> {
    try {
      const { error, value } = await this.userValidator.create(req.body);

      if (error) throw new BadRequestError([error.message]);

      const userRepository = getRepository(User);

      const user = userRepository.create(value);

      const result = await userRepository.save(user);

      return res.status(201).json({ user: result });
    } catch (error) {
      next(error);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<unknown> | undefined> {
    try {
      const { email, password } = req.body;

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({ where: { email: email } });

      if (!user) throw new BadRequestError(['user not found']);

      const isSamePassword = await bcrypt.compare(password, user.password);

      if (!isSamePassword) throw new UnauthorizedError(['invalid credentials']);

      const token = sign(user);

      return res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}
