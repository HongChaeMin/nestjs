import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserServiceUtil } from './utils/user.service.util';
import { JwtService } from '@nestjs/jwt';
import { UserSaveRequest } from './dto/request/save.request';
import { UserSignInRequest } from './dto/request/sign.in.request';
import { UserUpdateRequest } from './dto/request/update.request';
import { UserSignInResponse } from './dto/response/sign.in.response';
import { UserDeleteResponse } from './dto/response/delete.response';

export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(request: UserSaveRequest) {
    const user = await request.toEntity();
    const resultUser = await this.userRepository.save(user);
    return resultUser.toResponse();
  }

  async signIn(request: UserSignInRequest) {
    const user = await this.userRepository.findOneBy({
      account: request.account,
    });
    await UserServiceUtil.checkValid(user, request.password);
    const token = await UserServiceUtil.getToken(this.jwtService, user.id);
    return UserSignInResponse.of(token);
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
