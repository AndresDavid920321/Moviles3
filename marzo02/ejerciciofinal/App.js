import React from 'react';
import { StyleSheet, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  login=()=>{
    Alert.alert('presionaste el boton')
  }
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/login.png')}></Image>
        <TextInput maxLength= {5}  style= {styles.textInput} placeholder="Usuario"></TextInput>
        <Button title = "Start" onPress = {this.login}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:100,
    height:100
  },
  textInput: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    width:100,
    textAlign:'center'
   }
});
