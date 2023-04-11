import { Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport';
import { jwtConf } from '../jwt/configuration';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: request => request.headers.auth,
      secretOrKey: jwtConf.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload) {
    console.log(payload);
    return { id: payload.id };
  }
}
