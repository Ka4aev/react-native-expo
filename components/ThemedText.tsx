import { type FC, type PropsWithChildren } from 'react'
import {StyleProp, Text, useColorScheme, ViewStyle} from 'react-native'
import { Colors } from '@/constants/Colors'

interface Props extends PropsWithChildren{
  style?: StyleProp<ViewStyle>,
  title?: boolean
}
const ThemedText: FC<Props> = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'light']

  const textColor = title ? theme.title : theme.text

  return (
      <Text
          style={[{ color: textColor}, style]}
          {...props}
      />
  )
}

export default ThemedText