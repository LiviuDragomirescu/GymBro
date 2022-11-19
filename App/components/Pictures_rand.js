import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Pictures_rand = ({navigation, imageleft, imageright, leftname, rightname}) => {
    return (
        <View style={styles.container22}>
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Exercise', { name: leftname })
                    }
        >
            <Image
                source = {imageleft}
                style={styles.pic_left}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Exercise', { name: rightname })
                    }
        >
            <Image
                source = {imageright}
                style={styles.pic_right}
            />
        </TouchableOpacity>
        </View>
    )
  }

  const styles = StyleSheet.create({
    container22: {
        flex: 1,
        flexDirection:'row',
        backgroundColor:'black',
      },
    pic_left: {
        left:15,
        width: 120,
        height: 120,
      },  
    pic_right: {
        left:115,
        width: 120,
        height: 120,
      },  
  });

  export default Pictures_rand;