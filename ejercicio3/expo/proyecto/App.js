import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style = {styles.Text1}>hola1</Text>
    </View>

    <View style={styles.box2}>
      <Text style = {styles.Text1}>hola2</Text>
    </View>

    <View style={styles.box3}>
      <Text style = {styles.Text1}>hola3</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A4546',
    flexDirection:'colum'
  },
  Text:{
    color:'#B62A3D', 
    },

    Text1:{
      color:'#B62A3D', 
      },
   box1: {
     flex:1,
     backgroundColor:'#F4D03F'
   },

   box2: {
    flex:1,
    backgroundColor:'#0D1AE5'
  },

  box3: {
    flex:1,
    backgroundColor:'#E5230F'
  },
});
