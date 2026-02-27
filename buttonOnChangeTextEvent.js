import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState("New Message");
  const [inputValue, setInputValue] = useState("");

  const handlePress = () => {
    setMessage(inputValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type a new message"
        value={inputValue}
        onChangeText={setInputValue}
      />
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
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
