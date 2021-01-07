import { getRepository } from 'typeorm';

import { CreateUserDto } from '../dto/createUser.dto';
import { User } from '../entity/user.entity';

export class UsersService {
  async get(): Promise<User[]> {
    const usersRepository = getRepository(User);
    return await usersRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const usersRepository = getRepository(User);

    const user = usersRepository.create(createUserDto);
    return await usersRepository.save(user);
  }
}
