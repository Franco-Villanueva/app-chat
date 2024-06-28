import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar";
import {Route, Routes, Navigate} from 'react-router-native'
import LogInPage from "../pages/LogIn.jsx";

// const AppBar = Platform.select({
//     android: () => require('./IOSAppBar.jsx').default,
//     default: () => require('./AppBar.jsx').default
// })()

const Main = () => {
    return ( 
        <View style={{ flexGrow:1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/sign-in' element={<LogInPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </View>
     );
}
 
export default Main;