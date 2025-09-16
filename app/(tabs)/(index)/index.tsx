import { Link } from "expo-router";
import { Image, Pressable } from "react-native";
import { Platform, StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { FlashList } from "@shopify/flash-list";
import { coffees } from "@/data/coffees";
import { useOrderStore } from "@/hooks/use-order-store";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const orderCoffee = useOrderStore((state) => state.orderCoffee);

  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedText type="title">Coffees</ThemedText>
      <FlashList
        data={coffees}
        renderItem={({ item }) => (
          <Link href={`/(tabs)/(index)/${item.id}`}>
            <ThemedView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ThemedView style={{ flexDirection: "row" }}>
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <ThemedView style={{ paddingLeft: 8 }}>
                  <ThemedText style={{ fontWeight: "700" }}>
                    {item.name}
                  </ThemedText>
                  <ThemedText>{item.price.toFixed(2)} $</ThemedText>
                </ThemedView>
              </ThemedView>
              <Pressable
                onPress={() => orderCoffee(item)}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.5 : 1.0,
                    padding: 8,
                  },
                ]}
              >
                <Ionicons name="add-circle" size={24} color={"white"} />
              </Pressable>
            </ThemedView>
          </Link>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
