import { useIsMutating } from '@tanstack/react-query';
import Constants from 'expo-constants';
import { ReactElement } from 'react';
import { useWindowDimensions } from 'react-native';
import { ActivityIndicator, Card } from 'react-native-paper';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function MutationOverlay() {
  const isMutating = useIsMutating() >= 1;
  const { height, width } = useWindowDimensions();

  if (!isMutating) {
    return null;
  }

  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      style={{
        height: height + Constants.statusBarHeight,
        width,
        position: 'absolute',
        zIndex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Card style={{ padding: 15 }}>
        <ActivityIndicator />
      </Card>
    </Animated.View>
  );
}
