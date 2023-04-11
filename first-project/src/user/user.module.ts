import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConf } from '../common/jwt/configuration';
import { UserResolver } from './user.resolver';
import { JwtAccessStrategy } from 'src/common/auth/jwt-access.strategy';
import { GqlAuthAccessGuard } from '../common/auth/gql-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register(jwtConf),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver, JwtAccessStrategy, GqlAuthAccessGuard],
})
export class UserModule {}
