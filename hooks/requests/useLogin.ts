import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../api/login';
import { LoginFormValues } from '../../types/auth';

export function useLogin() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: LoginFormValues) => {
      const loginService = loginApi.login(payload);
      const response = await loginService();
      return response;
    },
  });

  return { login: mutateAsync, isLoginLoading: isPending };
}
