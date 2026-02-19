import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Messenger = ({ message }) => {
  return (
    <View style={styles.messenger}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messenger: {
    padding: 12,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    margin: 10,
  },
  message: {
    color: '#1976d2',
    fontSize: 14,
  },
});

export default Messenger;
