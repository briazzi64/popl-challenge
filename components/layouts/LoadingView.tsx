import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function LoadingView() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ActivityIndicator animating={true} />
    </View>
  );
}
