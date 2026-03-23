import {View, useColorScheme, StyleProp, ViewStyle} from "react-native";
import { Colors } from "@/constants/Colors";
import { type PropsWithChildren, type FC } from "react"

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>,
}

const ThemedView: FC<Props> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
      <View
          style={[{ backgroundColor: theme.background}, style]}
          {...props}
      />
  )
}

export default ThemedView;