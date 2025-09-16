import { Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { coffees } from "@/data/coffees";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const coffee = coffees.find((coffee) => coffee.id === Number(id));

  return (
    <ThemedView>
      <Stack.Screen options={{ title: coffee?.name }} />
      <ThemedText type="title">Detail of {coffee?.name}</ThemedText>
      <Image source={coffee?.image} style={{ width: "100%", height: 300 }} />
      <ThemedText>Detail of {coffee?.description}</ThemedText>
    </ThemedView>
  );
}
