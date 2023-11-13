import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import StackRoutes from './src/Routes/StackRoutes';
import { background } from './src/DefaultColors';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={background} barStyle="light-content" />
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
