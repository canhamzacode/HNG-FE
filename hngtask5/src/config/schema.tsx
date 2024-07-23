import * as yup from 'yup';

const emailError = 'Your Email is Required';

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(emailError),
  password: yup.string().min(8).required('Password is a required field')
});

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(emailError),
  password: yup.string().min(8).required('Password is a required field'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});
