import {Text, View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
    <Text><b>Welcome!</b></Text>
    <Text><i>My name is Felicity Zoe O. Villa</i></Text>
    <Text>2nd year BSIT Student at New Era University</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems:'center',
    justifyContent:'center',
    fontFamily: 'Times New Roman',
  } 
})
