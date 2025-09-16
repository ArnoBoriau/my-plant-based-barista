import { StyleSheet, Button } from "react-native";
import { router } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { FlashList } from "@shopify/flash-list";
import { useOrderStore } from "@/hooks/use-order-store";

export default function TabTwoScreen() {
  const orders = useOrderStore((state) => state.orders);
  const resetOrders = useOrderStore((state) => state.resetOrders);
  const totalAmountPrice = orders.reduce(
    (total, item) => total + item.coffee.price * item.amount,
    0
  );

  return (
    <ThemedView style={{ height: "100%", justifyContent: "space-between" }}>
      {orders.length !== 0 ? (
        <>
          <ThemedView style={styles.titleContainer}>
            <FlashList
              data={orders}
              renderItem={({ item }) => (
                <ThemedView
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 8,
                  }}
                >
                  <ThemedText style={{ fontWeight: "500" }}>
                    {item.coffee.name} x {item.amount}
                  </ThemedText>
                  <ThemedText>{item.coffee.price.toFixed(2)} $</ThemedText>
                </ThemedView>
              )}
            />
          </ThemedView>
          <ThemedView>
            <ThemedView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 8,
              }}
            >
              <ThemedText style={{ fontWeight: "700" }}>Total</ThemedText>
              <ThemedText style={{ fontWeight: "700" }}>
                $ {totalAmountPrice.toFixed(2)}
              </ThemedText>
            </ThemedView>
            <ThemedView>
              <ThemedView style={styles.button}>
                <Button
                  title="Place Order"
                  onPress={() => {
                    resetOrders();
                    router.navigate("/(tabs)/order/confirmation");
                  }}
                />
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </>
      ) : (
        <ThemedView style={{ height: "100%", justifyContent: "center" }}>
          <ThemedView style={{ alignItems: "center" }}>
            <ThemedText type="title">No Orders Yet</ThemedText>
            <ThemedText>
              You haven’t added any coffee to your order yet.
            </ThemedText>
          </ThemedView>
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
});
