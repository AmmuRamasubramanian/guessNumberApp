import {View, Text, StyleSheet,Dimensions} from 'react-native';

function NumberOutputContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const deviceWidth=Dimensions.get('window').width;


export default NumberOutputContainer


const styles=StyleSheet.create({
    container:{
        borderWidth:deviceWidth<380? 2:4,
        marginHorizontal:deviceWidth<380? 15:30,
        marginTop:20,
        padding:deviceWidth<380? 15:30,
        borderColor:'#dd9bde',
        borderRadius:30,   
        alignItems:'center',
        justifyContent:'center',
     },
    text:{
        
        color:'#f1a0f2',
        fontSize:deviceWidth<380? 17:34,
        fontWeight:'bold',
    }
})