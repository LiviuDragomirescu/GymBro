import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-paper';

const logofinal_image = require('.././images/logofinal.png') ;
const logobun_image = require('.././images/logobun.png') ;

const ExerciseUpdate = (props) => {

    const data = props.route.params.data;
    const [weight, onChangeNumber1] = React.useState(data.weight)
    const [sets, onChangeNumber2] = React.useState(data.sets)
    const [reps, onChangeNumber3] = React.useState(data.reps)

  const updateExercise = () => {
      fetch(`http://192.168.0.101:80/api/exercise/${data.id}/`,{
        method:"PUT",
        headers: {
          'Content-Type':'application/json'
        },

        body: JSON.stringify({exercise_name:data.exercise_name, weight:weight, sets:sets, reps:reps})
      })
      .then(resp => {
      if (resp.ok)
      {
        console.log(data)
        props.navigation.navigate('Progress_History')
      }
      else
      {
          Alert.alert("Incorect exercise template")
      }
    })
  }


    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={weight}
          placeholder="Weight"
          keyboardType="numeric"
          onChangeText={onChangeNumber1}
        />
        <View style={styles.view_style}>
          <TextInput
            style={styles.sets_input}
            onChangeText={onChangeNumber2}
            value={sets}
            placeholder="Sets"
            keyboardType="numeric"
          />
          <Image
            source = {logobun_image}
            style={styles.small_logo}
            />
          <TextInput
            style={styles.reps_input}
            onChangeText={onChangeNumber3}
            value={reps}
            placeholder="Reps"
            keyboardType="numeric"
          />
            </View>
            <Button
            icon = "update"
            mode = "contained"
            onPress = {() => updateExercise()} >
            Update Exercise
            </Button>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
      paddingHorizontal: 10
    },
    title_text:{
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
    big_loggo:{
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
    sets_input: {
      height: 100,
      width:100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color:"#000000",
      borderColor:"#ffffff",
      backgroundColor:"#ffffff"
    },
    reps_input: {
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
    small_logo:{
      margin: 12,
      width: 100,
      height: 100,
  },
  });

  export default ExerciseUpdate;