import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default Button1 = ({button_name}) => {
    return (
    <View style = {styles.button}>
      <Text style = {styles.text}>
        {button_name}
      </Text>
    </View>
    )
}

const styles = StyleSheet.create({
  button:{
    width: 283,
    height: 66,
    left: 56,
    top: 714,
    display: "flex", 
    justifyContent: "center", 
    alignContent: "center",
    backgroundColor: "#ffff00",
    borderRadius: 100
  },
  
  text:{
    left: 23,
    alignContent: "center",
    fontWeight: "bold", 
    color: "#000000", 
    fontSize: 40
  }
});
