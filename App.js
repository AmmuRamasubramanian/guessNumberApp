import { StyleSheet , ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber]=useState();
  const [gameOver, setGameOver]= useState(true);
  const [roundsNo, setRoundsNo]=useState(0);

  const [fontsLoaded]=useFonts({
    'poppins-italic':require('./assets/fonts/Poppins-Italic.ttf'),
    'poppins-regular':require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if(!fontsLoaded){
    return null;
  }

  function onconfirmedHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(roundsCount){
    setGameOver(true);
    setRoundsNo(roundsCount)
  }

  function onRestartGame(){
    setUserNumber(null);
    setRoundsNo(0);
  }

  let screen=<StartGameScreen onconfirmed={onconfirmedHandler}/>
  
  if (userNumber){
    screen=<GameScreen userNumber={userNumber} Ongameover={gameOverHandler}/>
  }

  if (gameOver && userNumber){
    screen=<GameOverScreen userNumber={userNumber} roundsNumber={roundsNo} onRestartGame={onRestartGame}/>
  }

  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={[ '#4f163d', '#ad3688' ]} style={styles.rootscreen}>
      <ImageBackground 
      source={require('./assets/images/dice.jpg')} 
      style={styles.rootscreen}
      resizeMode='cover'
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.androidSafeAreaView}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootscreen:{
    flex:1,
  },
  androidSafeAreaView:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
  backgroundImage:{
    opacity:0.25,
  }
});
