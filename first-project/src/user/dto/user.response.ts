export class UserResponse {
  constructor(
    id: number,
    account: string,
    name: string,
    email: string,
    phone: string,
    role: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.account = account;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  id: number;
  account: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserSignInResponse {
  constructor(token: string) {
    this.token = token;
  }
  token: string;

  static of(token: string) {
    return new UserSignInResponse(token);
  }
}

export class UserDeleteResponse {
  constructor(message: string) {
    this.message = message;
  }
  message: string;
}
