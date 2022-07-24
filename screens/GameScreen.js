import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';

import NumberContainer from '../components/game/NumberContainer';
import GuessLogItem from '../components/game/GuessLogItem';

// Game Logic function
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

// Game Screen function
function GameScreen({userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1, 
    100, 
    userNumber
    );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  // Restart the Game component
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length; // Count the number of Guesses

  let content = (
  <>
    <NumberContainer>{currentGuess}</NumberContainer>

    <Card>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color='white' />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="md-add" size={24} color='white' />
          </PrimaryButton>
        </View>
      </View>
    </Card>
    </>
  );

  if (width > 500 ) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>

      <View style={styles.buttonContainerLandscape}>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color='white' />
          </PrimaryButton>
        </View>

        <NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="md-add" size={24} color='white' />
          </PrimaryButton>
        </View>
      </View>

      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Oponents Guess</Title>

      {content}

      <View style={styles.listContainer}>
        {/* Version 1 realization
        {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        
        {/* Version 2 */}
        <FlatList  
          data={guessRounds} 
          renderItem={(itemData) => ( 
            <GuessLogItem 
              roundNumber={guessRoundsListLength - itemData.index} 
              guess={itemData.item}
            /> 
          )}
          keyExtractor={(item) => item}
          />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainerLandscape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
      flexDirection: "row",
      flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }

});