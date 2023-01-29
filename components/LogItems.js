import {Text, View, StyleSheet, Dimensions} from 'react-native';

function LogItems({guessItem, roundNumber}){
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.textcontainer}># {roundNumber}</Text>
            <Text style={styles.textcontainer}>Opponent's Guess:{guessItem}</Text>
        </View>
    )
}

const deviceWidth=Dimensions.get('window').width;

export default LogItems;

const styles=StyleSheet.create({
    mainContainer:{
        borderWidth:2,
        padding:10,
        marginVertical:10,
        borderColor:'white',
        borderRadius:30,
        backgroundColor:'#ffb3ff',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        //for ios,
        shadowColor:'black',
        shadowOffset:{height:0, width:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    },
    textcontainer:{
        fontSize:deviceWidth<380?12:15,
        fontFamily:'poppins-italic',
        color:'#330033',
    }
})