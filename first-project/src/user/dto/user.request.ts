import { User } from '../eneities/user.entity';
import { hash } from '../../common/encode/password.encode';

export class UserSaveRequest {
  account: string;
  password: string;
  name: string;
  email: string;
  phone: string;

  async toEntity() {
    const user = new User();
    user.account = this.account;
    user.password = await hash(this.password)
    user.name = this.name;
    user.email = this.email;
    user.phone = this.phone;
    return user;
  }
}

export class UserSignInRequest {
  account: string;
  password: string;
}

export class UserUpdateRequest {
  name: string;
  email: string;
  phone: string;
}
