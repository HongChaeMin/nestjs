import { User } from '../eneities/user.entity';

export class UserSaveRequest {
  account: string;
  password: string;
  name: string;
  email: string;
  phone: string;

  async toEntity(hash: (plainText: string) => Promise<string>) {
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
