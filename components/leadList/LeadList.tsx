import { FlatList, View } from 'react-native';
import { Lead } from '../../types/leads';
import { List, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import LeadListSearch from './LeadListSearchAndSort';
import LeadListSearchAndSort from './LeadListSearchAndSort';
import dayjs from 'dayjs';

type LeadListProps = {
  leads: Lead[];
};

export default function LeadList({ leads }: LeadListProps) {
  const [sortedLeads, setSortedLeads] = useState(leads);
  const [search, setSearch] = useState('');
  const [sortByCreated, setSortByCreated] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  let sortedLeads2 = leads.filter((lead) =>
    Object.values(lead).includes(search),
  );

  useEffect(() => {
    let currentSort = sortByCreated
      ? leads.sort((a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt)))
      : leads.sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)));

    if (!search) {
      setSortedLeads(currentSort);
      return;
    }

    currentSort = currentSort.filter((lead) => {
      return (
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSortedLeads(currentSort);
  }, [search, sortByCreated]);

  return (
    <>
      <LeadListSearchAndSort
        search={search}
        setSearch={setSearch}
        sortByCreated={sortByCreated}
        setSortByCreated={setSortByCreated}
      />
      <FlatList
        data={sortedLeads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={item.name ? item.name.replace(/\s+/g, ' ').trim() : ''}
            description={
              <View>
                <Text>{item.email.toLowerCase()}</Text>
                <Text>{dayjs(item.createdAt).format('MMMM DD, YYYY')}</Text>
              </View>
            }
            onPress={() =>
              navigation.navigate('LeadDetail', { leadId: item.id.toString() })
            }
          />
        )}
      />
    </>
  );
}
