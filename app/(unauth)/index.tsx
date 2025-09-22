import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";

export default function UnauthScreen() {
  return (
    <ThemedView style={styles.theme}>
      <ThemedText type="title">Welcome 12345!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  theme: {
    flex: 1,
    padding: 16,
  },
});
