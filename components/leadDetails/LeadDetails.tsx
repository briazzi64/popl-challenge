import { Card, Text, Button, Chip, useTheme } from 'react-native-paper';
import { Lead } from '../../types/leads';
import { View } from 'react-native';
import dayjs from 'dayjs';

type LeadDetailsProps = {
  leadDetails: Lead;
};

export default function LeadDetails({ leadDetails }: LeadDetailsProps) {
  const theme = useTheme();
  const { primary: primaryColor } = theme.colors;

  const { name, email, company, createdAt, notes, phone, title, tags } =
    leadDetails;
  const detailList = [
    {
      title: 'Company',
      content: company,
    },
    {
      title: 'Title',
      content: title,
    },
    {
      title: 'Phone',
      content: phone,
    },
    {
      title: 'Created At',
      content: dayjs(createdAt).format('MMMM DD, YYYY'),
    },
    {
      title: 'Notes',
      content: notes,
    },
  ];

  return (
    <Card>
      <Card.Title title={name} subtitle={email} />
      <Card.Content>
        {detailList.map((item) => {
          const { title, content } = item;
          return (
            <Text key={title}>
              <Text style={{ color: primaryColor }}>{title}:</Text> {content}
            </Text>
          );
        })}
        <Text
          variant="headlineSmall"
          style={{ color: primaryColor, marginVertical: 16 }}
        >
          Tags
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            flexWrap: 'wrap',
          }}
        >
          {tags.map((tag) => {
            return <Chip key={tag}>{tag}</Chip>;
          })}
        </View>
      </Card.Content>
      <Card.Actions>
        <Button icon="pencil">Edit</Button>
      </Card.Actions>
    </Card>
  );
}
