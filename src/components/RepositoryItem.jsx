import React from "react";
import { Image,View, Platform, StyleSheet} from 'react-native'
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";


const RepositoryItemHeader = ({ownerAvatarUrl, name, fullName, createdAt}) => {
    return(
        <View style={{flexDirection: 'row', paddingBottom: 2 }}>

            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{uri: ownerAvatarUrl}} />
            </View>
            
            <View style={{ flex: 1}}>
                <StyledText style={styles.name} fontWeight={'bold'} fontSize={'subheading'} >{name}</StyledText>
                <StyledText style={styles.gender} fontWeight={'bold'} fontSize={'subheading'} >{fullName}</StyledText>
                <StyledText fontWeight={'bold'} fontSize={'subheading'} >{createdAt}</StyledText>
            </View>
            
        </View>
        
    )
}



const RepositoryItem = (props) => {
    return ( 
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
     );
}


const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingVertical: 5,
    },
    name:{
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        // backgroundColor: Platform.select({
        //     android: theme.colors.primary,
        //     ios: theme.colors.white,
        //     default: 'purpel'
        // }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width:48,
        height: 48,
        borderRadius: 4
    },
    gender:{
        color:theme.colors.textSecondary
    }
    
})

export default RepositoryItem;