import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState("Carregando...");

<button
  title="Clique aqui"
  onPress={() => setMensagem("Você clicou no botão!")}
  style={{ marginTop: 20 }}
  
  
/>

  useEffect(() => {
    setTimeout(() => {
      setMensagem("Bem-vindo!");
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{mensagem}</Text>
    </View>
  );
}