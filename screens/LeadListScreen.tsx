import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useLeadsList } from '../hooks/requests/useLeads';
import LoadingView from '../components/layouts/LoadingView';
import NoDataView from '../components/layouts/NoDataView';
import LeadList from '../components/leadList/LeadList';
import AddLeadFab from '../components/leadList/AddLeadFab';

type Props = NativeStackScreenProps<RootStackParamList, 'LeadList'>;

export default function LeadListScreen({ navigation }: Props) {
  const { leads, isLeadsPending } = useLeadsList();

  if (isLeadsPending) {
    return <LoadingView />;
  }

  if (!leads || leads?.length === 0) {
    return (
      <NoDataView
        content="We couldn't find any leads."
        buttonText="Add a Lead"
        buttonOnPress={() => navigation.navigate('NewLead')}
        icon="plus"
      />
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <LeadList leads={leads} />
      <AddLeadFab />
    </View>
  );
}
