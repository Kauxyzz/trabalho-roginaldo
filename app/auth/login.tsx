import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login", "Autenticação simulada!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleLogin} />
      <Link href="/auth/register" asChild>
        <Button title="Criar conta" />
      </Link>
    </View>
  );
}