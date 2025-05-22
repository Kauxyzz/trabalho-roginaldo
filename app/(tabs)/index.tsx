import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Bem-vindo ao Gestão Avícola</Text>
      <Link href="/auth/login" asChild>
        <Button title="Login" />
      </Link>
    </View>
  );
}