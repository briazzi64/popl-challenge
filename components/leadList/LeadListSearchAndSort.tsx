import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

type LeadListSearchAndSortProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sortByCreated: boolean;
  setSortByCreated: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeadListSearchAndSort({
  search,
  setSearch,
  sortByCreated,
  setSortByCreated,
}: LeadListSearchAndSortProps) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <TextInput
        style={{ flex: 1 }}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search"
        right={<TextInput.Icon icon="account-search" />}
      ></TextInput>
      <Button
        onPress={() => setSortByCreated(!sortByCreated)}
        mode="contained"
        icon={sortByCreated ? 'chevron-down' : 'chevron-up'}
      >
        Date
      </Button>
    </View>
  );
}
