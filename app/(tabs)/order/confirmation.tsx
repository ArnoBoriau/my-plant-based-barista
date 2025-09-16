import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function TabTwoConfirmationScreen() {
  return (
    <ThemedView style={{ height: "100%", justifyContent: "center" }}>
      <ThemedView style={{ alignItems: "center" }}>
        <ThemedText type="title">Order Placed</ThemedText>
        <ThemedText>Thank you for your order!</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
