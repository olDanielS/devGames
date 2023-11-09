import { StyleSheet} from 'react-native';

import { StatusBar } from 'react-native';

import Home from './src/Pages/Home';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#FFF' barStyle="dark-content"/>
      <Home/>
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
