import React, { useEffect, useState } from "react";
import {  Text, FlatList} from 'react-native'
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    const [repositories, setRepositories] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchRepositories = async()=>{
        try {
            const response = await globalThis.fetch('http://localhost:5000/api/repositories');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            console.log(json);
            setRepositories(json);
        } catch (error) {
            console.error("Failed to fetch repositories:", error);
            setError(error.message);
        }
    }

    useEffect(()=>{
        fetchRepositories()
    },[])

    const repositoriesNodes = repositories
    ? repositories.edges.map(({edge})=>edge.node)
    : []

    return ( 
        <FlatList 
            data={repositoriesNodes}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item: repo}) => (
                    <RepositoryItem {...repo} />
            )}
        >
        </FlatList>
     );
}
 
export default RepositoryList;