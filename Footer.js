import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>All rights reserved. 2026</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 30,  
    justifyContent: 'flex-end',  
    paddingBottom: 7,
    paddingHorizontal: 5,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'courier new'
  },
});

export default Footer;
