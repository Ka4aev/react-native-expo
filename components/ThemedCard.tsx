import {View, useColorScheme, ViewStyle, StyleProp} from "react-native";
import { Colors } from "@/constants/Colors";
import { type PropsWithChildren, type FC } from "react"

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>,
}

const ThemedCard: FC<Props> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
      <View
          style={[{ backgroundColor: theme.uiBackground}, style]}
          {...props}
          className={styles.card}
      />
  )
}

export default ThemedCard;

const styles = {
  card: "rounded p-5",
}