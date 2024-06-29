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
                <StyledText >{props.stargazersCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight={'bold'}>specie:</StyledText>
                <StyledText >{props.forksCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight={'bold'}>origen:</StyledText>
                <StyledText >{props.ratingAverage}</StyledText>
            </View>
            
        </View>
    )
}

export default RepositoryStats;