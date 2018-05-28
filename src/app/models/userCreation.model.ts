export class UserCreation {
  constructor(
    public username: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public phoneNumber: number,
    public email: string,
    public registrationDate: Date
  ) {}
}
