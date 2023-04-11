import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserGuard extends AuthGuard('jwt') {}
