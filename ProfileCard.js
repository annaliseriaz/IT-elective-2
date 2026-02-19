import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://easydrawingguides.com/wp-content/uploads/2019/08/Freddy-Fazbear-10.png'}}  
        style={styles.avatar} 
      />
      <Text style={styles.name}>Felicity Zoe O. Villa</Text>
      <Text style={styles.location}>Paranaque City, Philippines </Text>
      <Text style={styles.bio}>instrumentalist, adventurer, cheerful, loves matcha </Text>  
      <Text style={styles.hobbies}>not good especially in coding but i'm willing to learn. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    margin: 20,
    width: '90%',
    maxWidth: 350,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '1000',
    marginBottom: 4,
    color: 'black',
    fontFamily: 'Georgia',  
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    fontFamily: 'calibri',
    fontStyle: 'italic'
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    lineHeight: 20,
    fontFamily: 'Lucida Handwriting',  
  },
   hobbies: {
    fontSize: 10,
    textAlign: 'center',
    color: '#0F0E0E',
    lineHeight: 22,
    fontFamily: 'Verdana',  
  },
});

export default ProfileCard;
