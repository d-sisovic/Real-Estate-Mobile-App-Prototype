import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) return null;

  const isDark = colorScheme === "dark";
  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <SafeAreaProvider>
        <SafeAreaView
          edges={["left", "right", "bottom", "top"]}
          style={[
            styles.container,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <StatusBar style={isDark ? "light" : "dark"} />

          <Stack initialRouteName="(unauth)/index">
            <Stack.Screen
              name="(unauth)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
