import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar title={"My Feed"} desc={"View your latest notifications"}/>
      <Text>Miranda was here!</Text>
      <NavBar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'

  },
});
