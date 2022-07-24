import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
};

export default NumberContainer;

// use of Dimensions for devices in styles
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    backgroundColor: 'white',
    borderColor: 'black',
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.primary500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
    // fontWeight: 'bold'
  }
})