import { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const { width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 300 ) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

   const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.rootContainer, imageStyle]}>

        <Text style={styles.summaryText}>
          Your phone needed - <Text style={styles.highlight}>{roundsNumber}</Text>rounds to guess.</Text>
          <Text style={styles.summaryText}> Your GUESS number was - <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>

        <Title>Game Over!</Title>

        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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