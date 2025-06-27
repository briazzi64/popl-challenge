import { useState } from 'react';
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { KeyboardTypeOptions, View } from 'react-native';
import { Text, TextInput, useTheme } from 'react-native-paper';

type ControlledTextInput = {
  name: string;
  label: string;
  isSecureTextEntry?: boolean;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  keyboardType?: KeyboardTypeOptions;
};

export default function ControlledTextInput({
  name,
  label,
  isSecureTextEntry,
  rules,
  keyboardType,
}: ControlledTextInput) {
  const [secureTextEntry, setSecureTextEntry] = useState(isSecureTextEntry);
  const methods = useFormContext();
  const theme = useTheme();
  const { error: errorColor } = theme.colors;

  return (
    <Controller
      name={name}
      control={methods.control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View style={{ marginBottom: 16 }}>
          <TextInput
            label={label}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={isSecureTextEntry}
            keyboardType={keyboardType}
          />
          {error && (
            <Text style={{ marginTop: 16, color: errorColor }}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}
