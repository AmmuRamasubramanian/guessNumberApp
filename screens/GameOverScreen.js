import {View, Text,StyleSheet, Image, useWindowDimensions,Dimensions, ScrollView} from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

function GameOverScreen({userNumber, roundsNumber, onRestartGame}){
    const {width,height}=useWindowDimensions();

    let imageSize=300;

    if(width<380){
        imageSize=150;
    }

    if (height<400){
        imageSize=90;
    }
    const imageStyling={
        height:imageSize,
        width:imageSize,
        borderRadius:imageSize/2,
    }

    return(
        <ScrollView style={styles.screen}>
        <View style={styles.maincontainer}>
            <Title>Game Over!</Title>
            <View style={[styles.imageContainer,imageStyling]}>
                <Image source={require('../assets/images/success.jpg')} style={styles.images}/>
            </View>  
            <Text style={styles.summaryContainer}>
                Your phone needed <Text style={styles.highlightContainer}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightContainer}>{userNumber}</Text> 
            </Text>
            <PrimaryButton onpress={onRestartGame}>Start New Game</PrimaryButton>
        </View>
        </ScrollView>
    );
}

const deviceWidth=Dimensions.get('window').width;

export default GameOverScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    maincontainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        // height:deviceWidth<380?150:300,
        // width:deviceWidth<380?150:300,
        // borderRadius:deviceWidth<380?75:150,
        overflow:'hidden',
        margin:36,
        borderWidth:3,
        borderColor:'black',
    },
    images:{
        height:'100%',
        width:'100%'
    },
    summaryContainer:{
        fontSize:deviceWidth<380?17:25,
        textAlign:'center',
        color:'white',
        fontFamily:'poppins-regular',
        marginBottom:15,
    },
    highlightContainer:{
        color:'#ffb3ff',
        fontFamily:'poppins-italic',
        fontWeight:'bold',
    }
})