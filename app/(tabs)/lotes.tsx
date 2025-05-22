import { View, Text, FlatList } from "react-native";

type Lote = {
  id: string;
  dataEntrada: string;
  quantidadeAves: number;
};

export default function LotesScreen() {
  const lotes: Lote[] = [
    { id: "1", dataEntrada: "2024-05-01", quantidadeAves: 1000 },
  ];

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={lotes}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Lote {item.id}</Text>
            <Text>{item.quantidadeAves} aves</Text>
          </View>
        )}
      />
    </View>
  );
}