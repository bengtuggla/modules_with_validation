import UserService from './services/UserService.js';
import { userValidation } from './functions/Validation.js';

const user = {
  firstName: 'Bengt',
  lastname: 'Uggla',
  email: 'bengt@gmail.com',
  password: '1243',
};

userValidation(user, () => {
  UserService.userSignUp(user);
});
