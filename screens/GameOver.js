import { useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <Text style={styles.summaryText}>
        Your phone needed - <Text style={styles.highlight}>{roundsNumber}</Text>rounds to guess.</Text>
        <Text style={styles.summaryText}> Your GUESS number was - <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.image} 
          source={require('../assets/images/success.png')} />
      </View>
      <PrimaryButton
        onPress={onStartNewGame}
      >
        Start New Game!
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: 'hidden',
    margin: 36,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    marginTop: 20,
    backgroundColor: Colors.accent500,
    padding: 5,
    alignContent: 'center'
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    padding: 3,
    color: Colors.primary500,
    textAlign: 'center',
  },

});