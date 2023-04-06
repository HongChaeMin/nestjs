export class UserSignInResponse {
  constructor(token: string) {
    this.token = token;
  }
  token: string;

  static of(token: string) {
    return new UserSignInResponse(token);
  }
}
