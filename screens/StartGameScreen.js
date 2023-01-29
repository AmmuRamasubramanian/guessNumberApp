import { useState } from 'react';
import {TextInput, View, StyleSheet, Alert,useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

function StartGameScreen({onconfirmed}){
    const [enteredNumber, setEnteredNumber]=useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetHandler(){
        setEnteredNumber('');
    }

    function confirmButtonHandler(){
        const chosenNumber=parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber>99 || chosenNumber<=0){
            Alert.alert(
                'Invalid Number',
                'Enter a number between 0 and 100',
                [{text:'okay', style:'destructive', onPress:resetHandler}]

            )
            return;
        }
       onconfirmed(chosenNumber);
    }

    const {width, height}=useWindowDimensions();
    const marginTopDistance=height<400?10:100;

    return(
        <ScrollView style={styles.screen}> 
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.maincontainer,{marginTop:marginTopDistance}]}>
        <Title>Guess my Number</Title>
        <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>  
                    <PrimaryButton onpress={resetHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onpress={confirmButtonHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

//const deviceHeight=Dimensions.get('window').height;

export default StartGameScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
    },
    maincontainer:{
        flex:1,
        //marginTop:deviceHeight<400?20:100,
        alignItems:'center'
    },
    numberInput:{
        borderBottomWidth:2,
        borderColor:'white',
        fontSize:34,
        marginVertical:10,
        color:'white',
        height:50,
        width:40, 
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    }
})