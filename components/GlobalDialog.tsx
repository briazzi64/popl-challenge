import { Portal, Dialog, Button, Text } from 'react-native-paper';
import { useGlobalDialog } from '../hooks/stores/useGlobalDialog';

export default function GlobalDialog() {
  const { isVisible, dialogContent, closeDialog } = useGlobalDialog();
  const { title, content } = dialogContent || {};

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={closeDialog}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{content}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={closeDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
