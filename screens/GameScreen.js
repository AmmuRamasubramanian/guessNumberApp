import { View, Text , StyleSheet, Alert, FlatList, Dimensions, useWindowDimensions} from "react-native";
import Title from "../components/Title";
import NumberOutputContainer from "../components/NumberOutputContainer";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons'; 
import LogItems from "../components/LogItems";

function generateRandomNumberBetween(min,max, exclude){
    const randamNumber=Math.floor(Math.random()*(max-min))+min;
    if (randamNumber===exclude){
        return generateRandomNumberBetween(min, max, exclude);
    }else{
        return randamNumber;
    }
}

let minBoundary=1
let maxBoundary=100

function GameScreen({userNumber, Ongameover}){
    const deviceWidth=Dimensions.get('window').width;
    const initialGuess=generateRandomNumberBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess);
    const [logRounds, setLogRounds]=useState([initialGuess]);

    useEffect( () =>{
        if (currentGuess === userNumber){
            Ongameover(logRounds.length);
        }
    },[currentGuess, userNumber, Ongameover])

    useEffect( ()=>{
        minBoundary=1,
        maxBoundary=100
    }, []);
 
    function nextGuessHandler(direction){
        if ((direction==='lower' && currentGuess<userNumber)||(direction==='greater' && currentGuess>userNumber)){
            Alert.alert("Don't Lie :(", 'You know it is wrong!', [{text:'Sorry', style:'cancel'}])
            return;
        }
        if (direction=='lower'){
            maxBoundary=currentGuess;
        }else{
            minBoundary=currentGuess+1;
        }
        const nextRandomNumber=generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(nextRandomNumber);
        setLogRounds(prevRounds=>[nextRandomNumber, ...prevRounds])
    }

    const logRoundsLength=logRounds.length;
    
    const {height, width}=useWindowDimensions();
    let content=(
        <>
            <NumberOutputContainer>{currentGuess}</NumberOutputContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onpress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={deviceWidth<380?14:24} color="#330033" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onpress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={deviceWidth<380?14:24} color="#330033" />
                        </PrimaryButton>
                    </View>              
                </View>
            </Card>
        </>
    )

    if (width>500){
        content=(
            <>
                 <View style={styles.buttonwideContainer}>
                 <View style={styles.buttonContainer}>
                        <PrimaryButton onpress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={deviceWidth<380?14:24} color="#330033" />
                        </PrimaryButton>
                    </View>
                    <NumberOutputContainer>{currentGuess}</NumberOutputContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onpress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={deviceWidth<380?14:24} color="#330033" />
                        </PrimaryButton>
                    </View>   
                 </View>
            </>
        )
    }

    return(
        <View style={styles.inputcontainer}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.flatlist}>
                {/* {logRounds.map(round=><Text key={round}>{round}</Text>)} */}
                <FlatList
                data={logRounds}
                renderItem={itemData=>{
                    return(
                        <LogItems guessItem={itemData.item} roundNumber={logRoundsLength-itemData.index}/>
                    )
                }}
                keyExtractor={(item)=>item}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}


export default GameScreen;

const styles=StyleSheet.create({
    buttonwideContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    inputcontainer:{
        padding:24,
        flex:1,
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    instructionText:{
        marginBottom:10,
    },
    flatlist:{
        flex:1,
        padding:16,
    }
    
})