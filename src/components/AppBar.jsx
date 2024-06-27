import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";


const AppBarTap = ({children, to}) => {
    const {pathname} = useLocation();

    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to}>
            <StyledText fontWeight={'bold'} style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}



const AppBar = () => {
    
    return ( 
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>

                <AppBarTap  to='/'>Reposotories</AppBarTap>
                <AppBarTap  to='/sign-in'>Sing In</AppBarTap>

            </ScrollView>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row'
    },
    text:{
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    scroll:{
        paddingBottom: 15,

    },
    active:{
        color: theme.appBar.textPrimary
    }
}
)
 
export default AppBar;