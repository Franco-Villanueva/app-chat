import React from "react";
import { View, Text, FlatList} from 'react-native'
import repositories from '../data/api.js'
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    return ( 
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item: repo}) => (
                    <RepositoryItem {...repo} />
            )}
        >
        </FlatList>
     );
}
 
export default RepositoryList;