import { StyleSheet, View ,Dimensions} from "react-native";

function Card({children}){
    return(
        <View style={styles.inputContainer}>{children}</View>
    )
}

const deviceWidth=Dimensions.get('window').width;

export default Card;

const styles=StyleSheet.create({
    inputContainer:{
        backgroundColor:'#330033',
        marginTop:deviceWidth<380? 20:40,
        marginHorizontal:deviceWidth<380?15:30,
        borderRadius:8,
        padding:20,
        elevation:4,
        justifyContent:'center',
        alignItems:'center',
        //for IOS
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        shadowOpacity:0.25,
    },
})