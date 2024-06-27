import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text:{
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    bold:{
        fontWeight: theme.fontWeights.bold,
    },
    textAlignCenter:{
        textAlign: 'center'
    }
    // big:{
    //     fontSize: 20,
    // },
    // small:{
    //     fontSize: 10,
    // },
});

export default function StyledText ({children, align, color, fontSize, fontWeight, style, ...restOfProps}){

    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlingCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style // añadir cualquier estilo personalizado adicional
    ];

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
}
