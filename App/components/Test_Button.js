import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default Test_Button = ({navigation, button_name}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.choose_button}
            onPress={() =>
                navigation.navigate('Choose_Workout')
                    }
        >
        <Text style={styles.text_button}>{button_name}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={styles.arrow_button}
            onPress={() =>
                navigation.navigate("Progress_History")
                    }
        >
        <Text style={styles.arrow_text}>➜</Text>
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
    choose_button:{
        width: 250,
        height: 66,
        left: 66,
        top: 100,
        justifyContent: "center", 
        alignContent: "center",
        backgroundColor: "#ffff00",
        borderRadius: 100
      },
      arrow_button:{
        width: 70,
        height: 70,
        left: 160,
        top: 200,
        justifyContent: "center", 
        alignContent: "center",
        backgroundColor: "#ffff00",
        borderRadius: 100
      },
    text_button: {
        left: 18,
        alignContent: "center",
        fontWeight: "bold", 
        color: "#000000", 
        fontSize: 30
    },
    arrow_text: {
      left: 14,
      alignContent: "center",
      fontWeight: "bold", 
      color: "#000000", 
      fontSize: 40
  }
  });