import { isHashValid } from '../../common/encode/password.encode';
import { HttpException } from '@nestjs/common';

export class UserServiceUtil {
  static async checkValid(user, password) {
    if (!user) throw new HttpException('Not exist user', 400);
    if (await isHashValid(password, user.password))
      throw new HttpException('Password is not valid', 400);
  }

  static getToken(jwtService, id) {
    return jwtService.signAsync({ id });
  }
}
