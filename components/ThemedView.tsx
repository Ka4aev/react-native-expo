import { useColorScheme, View, ViewProps } from "react-native";
import { useSafeAreaInsets} from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { type PropsWithChildren, type FC } from "react"

interface Props extends PropsWithChildren, Pick<ViewProps, 'pointerEvents'> {
  style?: any,
  safe?: boolean
}

const ThemedView: FC<Props> = ({ style, safe = false ,...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  if (!safe) return (
      <View
          style={[{ backgroundColor: theme.background }, style]}
          {...props}
      />
  )
  const insets = useSafeAreaInsets()
  return (
      <View
          style={[{
            backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
            style
          ]}
          {...props}
      />
  )
}

export default ThemedView;