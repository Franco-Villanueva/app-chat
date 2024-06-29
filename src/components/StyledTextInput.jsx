import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput:{
        height: 50,
        borderWidth:1,
        borderRadius: 8,
        borderColor:'#ff6b6b',
        paddingVertical:10,
        paddingHorizontal:15,
        marginVertical: 5,
    },
    error:{
  
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 4,
        paddingHorizontal:10,
        paddingVertical:5
        
    }
})

const StyledTextInput = ({style = {},error, ...props}) =>{
    const inputStyle = [
        styles.textInput,
        style,
        error && styles.error
    ]
        
    
    return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput;