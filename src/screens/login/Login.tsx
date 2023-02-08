import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { useState } from "react"
import { Button, SafeAreaView, Text, TextInput, View } from "react-native/"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        auth().signInWithEmailAndPassword(email, password)
        .then(() => console.log('usuario logado'))
        .catch(err => console.log(err))
    }

    return(
        <SafeAreaView>
            <View>
                <Text>Login</Text>
                <TextInput placeholder="email" value={email} onChangeText={setEmail} />
                <TextInput 
                    placeholder="senha" 
                    value={password}
                    onChangeText={setPassword} 
                    secureTextEntry 
                />
                <Button title="Entrar" onPress={signIn} />
            </View>
        </SafeAreaView>
    )
} 