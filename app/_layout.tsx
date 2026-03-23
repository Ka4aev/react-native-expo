import { Stack } from "expo-router";
import "@/global.css";
import { useColorScheme} from "react-native";
import { Colors } from "@/constants/Colors"
import { StatusBar } from "expo-status-bar";


const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'light']

  return (
      <>
        <StatusBar />
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
        }}>
          <Stack.Screen name="index" options={{ title: "Home" }}/>
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </>
  );
}

export default RootLayout;