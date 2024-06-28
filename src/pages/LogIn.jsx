import React from "react";
import { View, Text, TextInput } from "react-native";
import { Formik } from "formik";

const initialValues = {
    email: '',
    password: '',
}

const LogInPage = () => {
    return ( 
        <Formik initialValues={initialValues} onSubmit={values=> console.log(values)}>
            {({handleChange, handleSubmit, values})=>{
                return <View>
                    <TextInput placeholder="E-mail" />
                    <TextInput />
                </View>
            }}
        </Formik>
     );
}
 
export default LogInPage;