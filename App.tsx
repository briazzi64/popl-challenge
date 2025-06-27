import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './navigation';
import MutationOverlay from './components/MutationOverlay';
import GlobalDialog from './components/GlobalDialog';

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Navigation />
        <MutationOverlay />
        <GlobalDialog />
      </PaperProvider>
    </QueryClientProvider>
  );
}
