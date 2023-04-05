import { InjectRepository } from '@nestjs/typeorm';
import { User } from './eneities/user.entity';
import { Repository } from 'typeorm';
import { UserSaveRequest, UserSignInRequest, UserUpdateRequest } from './dto/user.request';
import { hash, isHashValid } from '../common/encode/password.encode';
import { UserDeleteResponse } from './dto/user.response';
import { BusinessException } from '../common/exception/business.exception';
import { ErrorCode } from '../common/exception/error.code';

export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(request: UserSaveRequest) {
    const user = await request.toEntity(hash);
    const resultUser = await this.userRepository.save(user);
    return resultUser.toResponse();
  }

  async signIn(request: UserSignInRequest) {
    const user = await this.userRepository.findOneBy({account: request.account});
    if (user && await isHashValid(request.password, user.password)) {
      throw new BusinessException(ErrorCode.NOT_EXIST_USER);
    }
    return 'success';
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOneBy({ id: id });
    return user.toResponse();
  }

  async updateUser(id: number, request: UserUpdateRequest) {
    await this.userRepository.update(
      { id: id },
      { name: request.name, email: request.email, phone: request.phone },
    );
    const user = await this.userRepository.findOneBy({ id: id });
    return user.toResponse();
  }

  async deleteUser(id: number) {
    await this.userRepository.delete({ id: id });
    return new UserDeleteResponse('success delete.');
  }

}
