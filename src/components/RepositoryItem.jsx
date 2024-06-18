import React from "react";
import { View, Text, StyleSheet} from 'react-native'
import StyledText from "./StyledText";


const RepositoryItem = (props) => {
    return ( 
        <View key={props.id} style={styles.container}>
            <StyledText big bold>ID:{props.id}</StyledText>
            <StyledText blue >name:{props.name}</StyledText>
            <StyledText small>status:{props.status}</StyledText>
            <StyledText small>specie:{props.species}</StyledText>
            <StyledText small>origen:{props.origin.name}</StyledText>

        </View>
     );
}


const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom: 5,
        paddingTop: 5
    },

})

export default RepositoryItem;