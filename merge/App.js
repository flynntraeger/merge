import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import DirectMessage from './components/DirectMessage/DirectMessage';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar title={"My Feed"} desc={"View your latest notifications"}/>
      <Text>Miranda was here!</Text>
      <DirectMessage 
        username="Naftyy"
        timestamp="Feb 8 @ 9:20PM"
        message="Get on Valorant bark bark bark grrrrr bark"
        picURL="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/103/original/Killua_2.jpg?1621356497"
      />
      <NavBar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center'

  },
});
