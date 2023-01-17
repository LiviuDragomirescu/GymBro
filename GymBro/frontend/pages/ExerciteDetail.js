import React from 'react';
import { useState , useEffect} from "react";
import { Text , FlatList, Alert, View, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity} from "react-native";
import {Button} from 'react-native-paper'
import {Card} from 'react-native-paper'

function ExerciseDetails(props) {

    const data = props.route.params.data;

    const deleteData = () => {
        fetch(`http://192.168.0.101:80/api/exercise/${data.id}/`,{
        method:"DELETE",
        headers: {
          'Content-Type':'application/json'
        }
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
        <View style = {styles.viewStyle}>
        <Text>
            Hello from Details {data.exercise_name} {data.weight} {data.sets} {data.reps}
        </Text>
        <View style = {styles.btnStyle}>
        <Button
            icon = "update"
            mode = "contained"
            onPress = {() => props.navigation.navigate("Update", {data:data})} >
        Edit
        </Button>

        <Button
            icon = "Delete"
            mode = "contained"
            onPress = {() => deleteData()} >
        Delete
        </Button>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding:10,
        margin:10,
    },
    btnStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        margin:15,
        padding:10,
    },
})

export default ExerciseDetails;