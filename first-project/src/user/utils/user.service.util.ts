import { BusinessException } from '../../common/exception/business.exception';
import { ErrorCode } from '../../common/exception/error.code';
import { isHashValid } from '../../common/encode/password.encode';

export class UserServiceUtil {

  static async checkValid(user, password) {
    if (!user) throw new BusinessException(ErrorCode.NOT_EXIST_USER);
    if (await isHashValid(password, user.password)) throw new BusinessException(ErrorCode.NOT_EXIST_USER);
  }

  static getToken(jwtService, id) {
    return jwtService.signAsync({ id })
  }

}
