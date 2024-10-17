import React from 'react';
import { Linking, Button, View, Text } from 'react-native';

// Función para abrir Minecraft y conectarse al servidor
const openMinecraftServer = () => {
  const serverUrl = 'play.miservidor.com'; // Cambia por la IP de tu servidor
  const serverPort = '19132'; // Cambia por el puerto de tu servidor
  const minecraftURL = `minecraft://connect?serverUrl=${serverUrl}&serverPort=${serverPort}`;

  Linking.openURL(minecraftURL).catch(err => console.error('Error al abrir Minecraft', err));
};

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Presiona el botón para conectarte al servidor de Minecraft:
      </Text>
      <Button title="Conectar a Minecraft" onPress={openMinecraftServer} />
    </View>
  );
};

export default App;
