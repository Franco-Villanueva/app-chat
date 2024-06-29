import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { Formik, useField } from "formik";
import StyledText from "../components/StyledText";
import StyledTextInput from "../components/StyledTextInput";
import theme from '../theme'
import { loginValidationSchema } from "../components/validationSchemas/login";


const initialValues = {
    email: '',
    password: '',
}

const FormikInputValue = ({name, ...props})=>{

    const [field, meta, helpers] = useField(name)

    return(
        <>
        <StyledTextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props} />
            {meta.error && <StyledText style={styles.error}>{'x '+meta.error}</StyledText>}
        </>
    )
    
}

// const validate = values => {
//     const errors = {};

//     if(!values.email) {
//         errors.email = "Email is required"

//     } else if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(values.email)){
//        errors.email = 'Invalid email address'
//     }

//     if(!values.password) {
//         errors.password = "Email is required"
//     }else if(values.password.length < 6){
//         errors.password = 'Password must be at least 8 characters'
//     }


//     return errors
// }

const LogInPage = () => {
    return ( 
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={()=>  console.log(values)}
        validateOnChange={true}
        validateOnBlur={true}>
            {({ handleSubmit})=>{
                return (
                    <View style={styles.body}>
                        <View style={styles.container}>
                            <StyledText style={styles.title}>Delicious Eats</StyledText>
                            <StyledText style={styles.subTitle}>Enter to discover wonderful foods</StyledText>
                        </View>
                        <View>
                            <StyledText style={styles.label}>Email</StyledText>
                            <FormikInputValue 
                            placeholder="m@example.com"
                            name= 'email' />

                            <StyledText style={styles.label}>Password</StyledText>
                            <FormikInputValue 
                            placeholder="********"
                            name='password'
                            secureTextEntry
                            />

                            <Button onPress={handleSubmit} title="Log In" />
                        </View>
                    </View>
                ) 
            }}
        </Formik>
     );
}

const styles = StyleSheet.create({
    body:{
        padding: 15,
    },
    container:{
        paddingVertical:30,
        alignItems:'center'
    },
    title:{
        color: theme.logIn.textPrimary,
        fontSize: theme.fontSizes.title,
        fontWeight: theme.fontWeights.bold
    },
    subTitle:{
        color: theme.logIn.textSecondary,
        fontSize: theme.fontSizes.subheading
    },
    label:{
        color: theme.logIn.textPrimary,
        fontSize: theme.fontSizes.body,
        fontWeight:theme.fontWeights.normal
    },
    error:{
  
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 4,
        paddingHorizontal:10,
        paddingVertical:5,
        marginBottom:2
    }
    
})



 
export default LogInPage;