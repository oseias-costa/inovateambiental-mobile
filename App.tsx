/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import auth from "@react-native-firebase/auth"

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Dashboard } from "./src/screens/dashboard/Dashboard";
import { Login } from "./src/screens/login/Login";
import { AuthProvider } from "./src/context/Context";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <Text>Texto Teste</Text>
    </SafeAreaView>
  );
}

interface userData {
  username: string
  password: string
  prevState: null
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [ user, setUser ] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    auth().onAuthStateChanged((logged: any) => setUser(logged))
  }, [])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    {user ? 
      <AuthProvider>
        <Dashboard />
      </AuthProvider> 
    : <Login />
    }
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
