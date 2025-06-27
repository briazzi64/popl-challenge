import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

type NoDataViewProps = {
  content: string;
  buttonText: string;
  buttonOnPress: () => void;
  icon?: IconSource;
};

export default function NoDataView({
  content,
  buttonText,
  buttonOnPress,
  icon,
}: NoDataViewProps) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ marginBottom: 16 }}>{content}</Text>
      <Button onPress={buttonOnPress} icon={icon} mode="contained">
        {buttonText}
      </Button>
    </View>
  );
}
