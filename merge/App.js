import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import DirectMessage from './components/DirectMessage/DirectMessage';
import GameInvite from './components/GameInvite/GameInvite';
import GameCard from './components/GameCard/GameCard';
import UserCard from './components/UserCard/UserCard';

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
      <GameInvite username="Naftyy" game="Valorant" time="6pm" date="2/8" active={true}/>
      <GameCard
        game="Minecraft"
        picURL="https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png"
      />
      <UserCard
        username="Naftyy"
        level="17"
        progress={0.25}
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
