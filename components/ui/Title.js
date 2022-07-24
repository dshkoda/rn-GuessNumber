import { Text, StyleSheet, Platform } from 'react-native';

function Title({children}) {
  return(
    <Text style={styles.title}>
      {children}
   </Text>
   
  )
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 0 : 2, // variant 1 for Platform
    borderWidth: Platform.select({ ios: 0, android: 2 }), // variant 2 for Platform
    borderColor: 'white',
    padding: 12,
    borderRadius: 6,
    maxWidth: '80%',
    width: 300,
  }
});