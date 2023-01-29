import {Text, View, StyleSheet, Dimensions} from 'react-native';

function InstructionText({children, style}){
    return(
            <Text style={[styles.textContainer, style]}>{children}</Text>
    )
}

const deviceWidth=Dimensions.get('window').width;

export default InstructionText;

const styles=StyleSheet.create({
    textContainer:{
        textAlign:'center',
        color:'white',
        fontFamily:'poppins-regular',
        fontSize:deviceWidth<380?15:24,
    }
})