import Logo from "@/assets/images/logo.svg";
import ThemedInput from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function UnauthScreen() {
  return (
    <ThemedView style={styles.theme}>
      <Logo style={styles.logo} />

      <ThemedText type="subtitle" style={styles.subtitle}>
        Sign In
      </ThemedText>

      <ThemedInput
        label="Username"
        placeholder="Username"
        leftIcon={<Ionicons name="person-outline" size={20} color="gray" />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  theme: {
    flex: 1,
    padding: 16,
    display: "flex",
    paddingTop: 76,
    paddingLeft: 25,
    paddingRight: 25,
  },
  logo: {
    marginBottom: 60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  subtitle: {
    marginBottom: 20,
  },
});
