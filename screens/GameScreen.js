import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max-min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1,100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* + -  */}
      <View>Log rounds</View>
    </View>

  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

});