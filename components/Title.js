import {View, Text, StyleSheet, Dimensions} from 'react-native';

function Title({children}){
    return(
        <View>
             <Text style={styles.title}>{children}</Text>
        </View>
    )
}

const deviceWidth=Dimensions.get('window').width;

export default Title;

const styles=StyleSheet.create({
    title:{
        textAlign:'center',
        borderWidth:deviceWidth<380? 1:2,
        padding:deviceWidth<380?10:20,
        color:'white',
        fontSize:deviceWidth<380?18: 25,
        borderColor:'white',
        fontFamily:'poppins-italic',
    }
})