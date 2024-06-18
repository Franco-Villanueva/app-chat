import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body ,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    bold:{
        fontWeight: theme.fontWeights.bold,
    },
    big:{
        fontSize: 20,
    },
    small:{
        fontSize: 10,
    },
})

export default function StyledText ({blue, bold, big, small, children}){

    const textStyles = [
        styles.text,
        blue && styles.blue,
        big && styles.big,
        small && styles.small,
        bold && styles.bold,

    ]

    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}