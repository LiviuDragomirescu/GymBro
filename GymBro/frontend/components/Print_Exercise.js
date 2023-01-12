import React from 'react';
import { useState , useEffect} from "react";
import { Text , FlatList, Alert, View, StyleSheet, StatusBar, SafeAreaView} from "react-native";
import {Card} from 'react-native-paper'

const mydata = [
    {id:1, exercise_name:"pula1", weight:2, sets:4, reps:20},
    {id:2, exercise_name:"asdad2", weight:13, sets:2, reps:11},
]

const onedata = {id:1, exercise_name:"pula1", weight:2, sets:4, reps:20}

function Print_Exercise() {

  const [data, setData] = useState(null)

    useEffect (() => {
      fetch('http://192.168.0.101:80/api/exercise/',{
        method:"GET"
      })
      .then(resp => resp.json())
    //   .then(console.log(data))
      .then(data => {
        setData(data)
      })
      .catch(error => Alert.alert("erorr", error))
    }, []);

    const renderData = (item) => {
      return (
        <Card style = {styles.cardstyle}>
          <Text style={{fontSize:25}}>{item.exercise_name}</Text>
        </Card>
      )
    }

    return (
        <SafeAreaView style={styles.container}>
        <FlatList 
          data = {data}
          renderItem = {({item}) => {
            console.log(item)
            return renderData(item)
          }}
          keyExtractor = {item => item.id}
        />
        </SafeAreaView>
      
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    }
  });
  

export default Print_Exercise