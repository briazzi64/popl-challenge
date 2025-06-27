import { View } from 'react-native';
import LoginForm from '../components/login/LoginForm';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <LoginForm />
    </View>
  );
}
