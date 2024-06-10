import { Button,View, Text, StyleSheet, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const signIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth,email, password);
            console.log(response);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth,email, password);
            console.log(response);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth= FIREBASE_AUTH;

  return (
    <View style ={styles.container}>
        <KeyboardAvoidingView behaviour = "padding">
        <TextInput 
        value = {email}
        style = {styles.input} 
        placeholder = "Email" 
        onChangeText = {(text) => setEmail(text)} />
        <TextInput 
        secureTextEntry= {true} 
        value = {password}
        style = {styles.input} 
        placeholder = "Password" 
        onChangeText = {(text) => setPassword(text)} />

        {loading ? <ActivityIndicator size = "large" color ={"0000ff"} /> :( 
        <>
        <Button title = "Login" onPress={signIn} />
        <Button title = "SignUp" onPress={signUp} />

        </>)
        }
        </KeyboardAvoidingView>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex : 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical : 4,
        height : 50,
        borderWidth : 1,
        borderRadius : 4,
        padding : 0,
        backgroundColor : 'white',
    },
    button : {
        padding : 10,
        backgroundColor : 'orange',
    }
});