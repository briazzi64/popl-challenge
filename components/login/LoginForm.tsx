import { FormProvider, useForm } from 'react-hook-form';
import ControlledTextInput from '../inputs/ControlledTextInput';
import { Button } from 'react-native-paper';
import { LoginFormValues } from '../../types/auth';
import { useLogin } from '../../hooks/requests/useLogin';
import { useAuthStore } from '../../hooks/stores/useAuthStore';
import { emailPattern } from '../../constants/regex';
import { useGlobalDialog } from '../../hooks/stores/useGlobalDialog';

export default function LoginForm() {
  const { setAuthUser } = useAuthStore();
  const { openDialog } = useGlobalDialog();
  const { login, isLoginLoading } = useLogin();
  const formMethods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  async function onSubmit(data: LoginFormValues) {
    try {
      const response = await login(data);
      setAuthUser(response);
    } catch {
      openDialog({
        title: 'Alert',
        content: `Invalid username or password`,
      });
    }
  }

  return (
    <FormProvider {...formMethods}>
      <ControlledTextInput
        name="email"
        label="Email"
        rules={{
          required: {
            value: true,
            message: 'Email is Required',
          },
          pattern: {
            value: emailPattern,
            message: 'Email is not a valid email',
          },
        }}
      />
      <ControlledTextInput
        name="password"
        label="Password"
        rules={{
          required: {
            value: true,
            message: 'Password is Required',
          },
        }}
        isSecureTextEntry
      />
      <Button
        loading={isLoginLoading}
        mode="contained"
        onPress={formMethods.handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </FormProvider>
  );
}
