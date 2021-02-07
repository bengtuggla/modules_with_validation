export const userValidation = (user, cb) => {
  if (
    user.firstName.trim() !== ' ' &&
    user.lastname.trim() !== ' ' &&
    user.email.trim() !== ' ' &&
    user.password.trim().length > 3
  ) {
    console.log('Success');
    cb();
  } else {
    console.log('Error');
  }
};
