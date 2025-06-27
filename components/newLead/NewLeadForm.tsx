import { FormProvider, useForm } from 'react-hook-form';
import ControlledTextInput from '../inputs/ControlledTextInput';
import { useCreateLead } from '../../hooks/requests/useLeads';
import { Lead } from '../../types/leads';
import { Button } from 'react-native-paper';
import { useGlobalDialog } from '../../hooks/stores/useGlobalDialog';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { emailPattern, phoneNumberPattern } from '../../constants/regex';

export default function NewLeadForm() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { createLead, isCreateLeadPending } = useCreateLead();
  const { openDialog } = useGlobalDialog();
  const formMethods = useForm<Lead>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      notes: '',
      phone: '',
      title: '',
    },
    mode: 'onBlur',
  });

  async function onSubmit(data: Lead) {
    try {
      await createLead(data);
      openDialog({
        title: 'Success!',
        content: `${data.name} has successfully been added as a lead`,
      });
      navigation.goBack();
    } catch {
      openDialog({
        title: 'Alert',
        content: `Something went wrong and our team has been notified`,
      });
    }
  }

  return (
    <FormProvider {...formMethods}>
      <ControlledTextInput
        name="name"
        label="Name"
        rules={{
          required: {
            value: true,
            message: 'Name is Required',
          },
        }}
      />
      <ControlledTextInput
        name="email"
        label="Email"
        rules={{
          required: {
            value: true,
            message: 'Email is Required',
          },
          pattern: {
            value: emailPattern,
            message: 'Email is not a valid email',
          },
        }}
        keyboardType="email-address"
      />
      <ControlledTextInput
        name="company"
        label="Company"
        rules={{
          required: {
            value: true,
            message: 'Company is Required',
          },
        }}
      />
      <ControlledTextInput name="notes" label="Notes" />
      <ControlledTextInput
        name="phone"
        label="Phone"
        rules={{
          required: {
            value: true,
            message: 'Phone is Required',
          },
          pattern: {
            value: phoneNumberPattern,
            message: 'Phone is not a valid phone number',
          },
        }}
      />
      <ControlledTextInput name="title" label="Title" />
      <Button
        loading={isCreateLeadPending}
        mode="contained"
        onPress={formMethods.handleSubmit(onSubmit)}
        style={{ marginTop: 16 }}
      >
        Save
      </Button>
    </FormProvider>
  );
}
