import { LoginFormValues, AuthUser } from '../types/auth';
import { api } from './api';

export const loginApi = {
  login: (data: LoginFormValues) => async () => {
    // Pretend to post data to the api and get a user response
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      id: '1234',
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email@test.com',
      phoneNumber: '1234567890',
    };
  },
};
