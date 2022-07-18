import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
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

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1, 
    100, 
    userNumber
    );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || 
    (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie to me!", "Push another button!", [{ text: 'Sorry!', style: 'cancel'}])
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary,maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      <View>Log rounds</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

});