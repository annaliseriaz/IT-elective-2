import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const App= () => {
  let message = "New Message";

  const handlePress = () => {
    message = "Button Pressed"
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} />
      <Text style={styles.text}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
