import React from 'react';
import { View } from 'react-native';
import NewLeadForm from '../components/newLead/NewLeadForm';

export default function NewLeadScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <NewLeadForm />
    </View>
  );
}
