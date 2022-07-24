import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({children}) {
  return(
    <View style={styles.card}>{children}</View>
  );
}

export default Card;

// use of Dimensions for devices in styles
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 28 : 36,
    marginHorizontal: deviceWidth < 380 ? 18 : 24,
    padding: deviceWidth < 380 ? 14 : 16,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3},
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
});