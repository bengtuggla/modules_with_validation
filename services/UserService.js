import User from '../models/User.js';

export default class UserService {
  constructor() {}

  static userSignUp(user) {
    const user1 = new User(
      user.firstName,
      user.lastname,
      user.email,
      user.password,
      user.id
    );
    return console.log(user1);
  }
}
