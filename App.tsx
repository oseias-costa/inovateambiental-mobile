/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import auth from "@react-native-firebase/auth"
import React, { useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Login } from "./src/screens/login/Login";
import { AuthProvider } from "./src/context/Context";
import { Routes } from "./src/context/Routes";

function App(): JSX.Element {
  const [ user, setUser ] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    auth().onAuthStateChanged((logged: any) => setUser(logged))
  }, [])

  return (
    <>
    { user ? 
      <AuthProvider>
        <Routes />
      </AuthProvider> 
    : <Login /> }
    </>
  );
}

export default App;
