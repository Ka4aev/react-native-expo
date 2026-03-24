import {Pressable, StyleSheet, StyleProp, ViewStyle} from "react-native";
import {FC, PropsWithChildren} from "react";
import { Colors } from '@/constants/Colors'

interface Props extends PropsWithChildren {
  style?: any;
  onPress?: () => void;
}

const ThemedButton: FC<Props> = ({style, onPress, ...props}) => {
  return (
      <Pressable
          onPress={onPress}
          style={[styles.btn, style]}
          {...props}
      />
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: Colors.primary
  },
});

export default ThemedButton;