import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default Test_Button = ({navigation, button_name, Go_To}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.button22}
            onPress={() =>
                navigation.navigate('Choose_Workout')
                    }
        >
        <Text style={styles.testwst}>{button_name}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={styles.button24}
            onPress={() =>
                navigation.navigate("Progress_History")
                    }
        >
        <Text style={styles.test2}>➔</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    button22:{
        width: 250,
        height: 66,
        left: 66,
        top: 100,
        justifyContent: "center", 
        alignContent: "center",
        backgroundColor: "#ffff00",
        borderRadius: 100
      },
      button24:{
        width: 70,
        height: 70,
        left: 160,
        top: 200,
        justifyContent: "center", 
        alignContent: "center",
        backgroundColor: "#ffff00",
        borderRadius: 100
      },
    testwst: {
        left: 18,
        alignContent: "center",
        fontWeight: "bold", 
        color: "#000000", 
        fontSize: 30
    },
    test2: {
      // left: 18,
      alignContent: "center",
      fontWeight: "bold", 
      color: "#000000", 
      fontSize: 60
  }
  });