import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function UnauthScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.theme}>
          <ThemedText type="title">Welcome 123!</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  theme: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: "white",
  },
});
