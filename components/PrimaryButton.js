import {View, Text,StyleSheet, Pressable, Dimensions} from 'react-native'

function PrimaryButton({children, onpress}){
    return(
        <View style={styles.buttonOuterContainer}>
             <Pressable onPress={onpress}  
             android_ripple={{color:'white'}} 
             style={({pressed})=>pressed? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
             //for ios
             >
            <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>  
    )
}

const deviceWidth=Dimensions.get('window').width;

export default PrimaryButton;

const styles=StyleSheet.create({
    buttonOuterContainer:{
        margin:5,
        borderRadius:28,
        overflow:'hidden',
    },
    buttonInnerContainer:{
        backgroundColor:'#ffb3ff',
        elevation:4,
        paddingVertical:deviceWidth<380?8:10,
        paddingHorizontal:deviceWidth<380?10:16,
    },
    text:{
        textAlign:'center',
        color:'#330033',
        fontWeight:'bold',
       
    },
    //for ios
    pressed:{
        opacity:0.75,
    }
})