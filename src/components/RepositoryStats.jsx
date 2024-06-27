import React from "react";
import {View} from "react-native"
import StyledText from "./StyledText";

const parseThousands = value => {
    return value >= 1000
    ? `${Math.round(value /100) /10}k`
    : String(value)
}

const RepositoryStats = props => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText  fontWeight={'bold'} >status:</StyledText>
                <StyledText >{props.status}</StyledText>
            </View>
            <View>
                <StyledText fontWeight={'bold'}>specie:</StyledText>
                <StyledText >{props.species}</StyledText>
            </View>
            <View>
                <StyledText fontWeight={'bold'}>origen:</StyledText>
                <StyledText >{props.origin.name}</StyledText>
            </View>
            
        </View>
    )
}

export default RepositoryStats;