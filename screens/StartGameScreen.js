import { useState } from 'react';
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
        console.log(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber)  || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert(
            'Invalid number', // title 
            'Number has to be a number 1 to 20.', // descriptio
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}] // button
            );
            // show alert ...
            return;
        }

        onPickNumber(chosenNumber);
        console.log('Valid number!');
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
            
            <View style={[styles.rootContainer, 
                            {marginTop: marginTopDistance}]}
            >
                <Title>Guess My Number</Title>
                <Card>
                    <InstructionText>Enter a number:</InstructionText>
                    <TextInput style={styles.numberInput} placeholder="0" maxLength={3} keyboardType="number-pad" placeholderTextColor="#00965e"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                    />

                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>

                        <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}
                        >Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>

        </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 200,
        fontSize: 32,
        borderBottomColor: 'white',
        backgroundColor: 'white',
        borderBottomWidth: 2,
        color: 'black',
        marginVertical: 5,
        textAlign: 'center',
        borderRadius: 5
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flexDirection: "row",
        flex: 1
    }
});