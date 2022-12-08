import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const logofinal_image = require('.././images/logofinal.png') ;
const logobun_image = require('.././images/logobun.png') ;

const Exercise = ({navigation, route}) => {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  const [number4, onChangeNumber4] = React.useState(null);
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>
            {route.params.name}  <Text style={styles.text2}>Exercise
        </Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Exercise Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber4}
          value={number4}
          placeholder="Weight"
          keyboardType="numeric"
        />
        <View style={styles.view_style}>
          <TextInput
            style={styles.input2}
            onChangeText={onChangeNumber2}
            value={number2}
            placeholder="Sets"
            keyboardType="numeric"
          />
          <Image
            source = {logobun_image}
            style={styles.pic2}
            />
          <TextInput
            style={styles.input3}
            onChangeText={onChangeNumber3}
            value={number3}
            placeholder="Reps"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
            style={styles.button22}
            onPress={() =>
                navigation.navigate('Record_Workout')
                    }
        >
        <Text style={styles.testwst}>Submit</Text>
        </TouchableOpacity>

        <Image
            source = {logofinal_image}
            style={styles.pic}
            />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
      paddingHorizontal: 10
    },
    text1:{
        fontSize:30,
        color:"yellow",
        left:90,
        right:20,
        justifyContent: "center"
    },
    text2:{
      fontSize:30,
      color:"white",
      left:40,
      right:20,
      justifyContent: "center"
  },
    pic:{
        // top:10,
        left:120,
        width: 150,
        height: 150,
    },
    button22:{
        left: 15,
        top: -150,
        justifyContent: "center", 
        backgroundColor: "#ffff00",
        borderRadius: 10,
        height: 60,
        width: 360
      },
    testwst: {
        justifyContent: "center",
        left:140,
        fontWeight: "bold", 
        color: "#000000", 
        fontSize: 30
    },
    input: {
      left: 10,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"#000000",
      borderColor:"#ffffff",
      backgroundColor:"#ffffff"
    },
    input2: {
      height: 100,
      width:100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"#000000",
      borderColor:"#ffffff",
      backgroundColor:"#ffffff"
    },
    input3: {
      height: 100,
      width:100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"#000000",
      borderColor:"#ffffff",
      backgroundColor:"#ffffff"
    },
    view_style: {
      flex: 1,
      flexDirection:'row',
      backgroundColor:'black',
      paddingHorizontal: 10
    },
    pic2:{
      margin: 12,
      width: 100,
      height: 100,
  },
  });

  export default Exercise;