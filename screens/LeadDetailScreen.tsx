import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useLeadDetails } from '../hooks/requests/useLeads';
import LoadingView from '../components/layouts/LoadingView';
import NoDataView from '../components/layouts/NoDataView';
import LeadDetails from '../components/leadDetails/LeadDetails';

type Props = NativeStackScreenProps<RootStackParamList, 'LeadDetail'>;

export default function LeadDetailScreen({ navigation, route }: Props) {
  const { leadId } = route.params;
  const { leadDetails, isLeadDetailsPending } = useLeadDetails(leadId);

  if (isLeadDetailsPending) {
    return <LoadingView />;
  }

  if (!leadDetails) {
    return (
      <NoDataView
        content="Something went wrong retrieving that lead. Our team has been notified"
        buttonText="Go Back"
        buttonOnPress={() => navigation.goBack()}
        icon="chevron-left"
      />
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <LeadDetails leadDetails={leadDetails} />
    </View>
  );
}
