import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BusinessException } from '../exception/business.exception';
import { ErrorCode } from '../exception/error.code';
import { Reflector } from '@nestjs/core';
import { UserService } from '../../user/user.service';
import { jwtConf } from '../jwt/configuration';

@Injectable()
export class AuthGuard {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly userService: UserService,
  ) {}

  private readonly logger = new Logger(AuthGuard.name);

  async canActivate(context) { // ㅋㅋ 작동 안되면 변수명 확인해라... 상속 받는거 아니면
    const request = context.switchToHttp().getRequest();
    // const roles = this.reflector.get<string[]>('roles', context.getHandler());

    try {
      const token = request.headers.auth;
      this.jwtService.verify(token, jwtConf);
      const json = this.jwtService.decode(token, { json: true }) as { id: number };
      this.logger.debug(json.id)
    } catch (e) {
      throw new BusinessException(ErrorCode.FORBIDDEN);
    }

    return true;
  }
}
