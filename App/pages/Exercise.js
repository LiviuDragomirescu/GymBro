import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const logofinal_image = require('.././images/logofinal.png') ;

const Choose_Workout = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            {route.params.name} Exercise
        </Text>
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
    text:{
        fontSize:30,
        color:"white",
        left:40,
        right:20,
        justifyContent: "center"
    },
    pic:{
        top:400,
        left:120,
        width: 150,
        height: 150,
    },
    button22:{
        top: 350,
        justifyContent: "center", 
        backgroundColor: "#ffff00",
        borderRadius: 10,
        height: 60,
      },
      testwst: {
        justifyContent: "center",
        left:140,
        fontWeight: "bold", 
        color: "#000000", 
        fontSize: 30
    },
  });

  export default Choose_Workout;