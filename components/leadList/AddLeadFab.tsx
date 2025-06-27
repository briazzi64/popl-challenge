import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FAB } from 'react-native-paper';
import { RootStackParamList } from '../../navigation';

export default function AddLeadFab() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <FAB
      icon="plus"
      onPress={() => navigation.navigate('NewLead')}
      style={{ position: 'absolute', right: 24, bottom: 40 }}
    />
  );
}
