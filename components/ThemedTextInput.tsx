import { type FC, type PropsWithChildren } from 'react'
import {KeyboardType, TextInput, useColorScheme} from 'react-native'
import { Colors } from '@/constants/Colors'

interface Props extends PropsWithChildren{
  style?: any,
  placeholder?: string,
  keyboardType?: KeyboardType,
  onChangeText?: (value: string) => void,
  value?: any,
  secureTextEntry?: boolean,
}
const ThemedTextInput: FC<Props> = ({ style, placeholder, keyboardType, onChangeText, value, secureTextEntry = false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'light']

  return (
      <TextInput
          style={[
            {
              backgroundColor: theme.uiBackground,
              color: theme.text,
              padding: 20,
              borderRadius: 6
            },
            style
          ]}
          {...props}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
      />
  )
}

export default ThemedTextInput
