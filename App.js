
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/Homepage'; 
import AboutPage from './components/Aboutpage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Skills" component={Skills} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
