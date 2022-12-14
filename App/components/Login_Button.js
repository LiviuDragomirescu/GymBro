import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default Login_Button = ({navigation, button_name}) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() =>
                navigation.navigate('Register')
                    }
        >
        <Text style={styles.testwst}>{button_name}</Text>
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
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    loginButton:{
        width: 386,
        height: 40,
        left: 0,
        top: 80,
        justifyContent: "center", 
        alignContent: "center",
        backgroundColor: "#ffff00",
      },
      
    testwst: {
        left: 140,
        alignContent: "center",
        fontWeight: "bold", 
        color: "#000000", 
        fontSize: 28
    },
  });