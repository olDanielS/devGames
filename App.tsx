import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import StackRoutes from './src/Routes/StackRoutes';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor='#FFF' barStyle="dark-content" />
        <StackRoutes />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
