import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState("New Message"); // The switch

  const handlePress = () => {
    setMessage("Button Pressed"); //The action of flipping the switch
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} />
      <Text style={styles.text}> //the light bulb
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
