import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import { Button } from 'react-native-elements';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';

export default function Start1Screen({ route, navigation }) {
  const params = route.params;
  return (
    <View style={styles.container}>
      <TopBar title="Start2" desc="Almost done!" />
      <Text>Start2 screen test</Text>
      <Button
        buttonStyle={styles.iconButton}
        title={"Next"}
        onPress={() => navigation.navigate("Start3 Screen")}
      />
      <Button
        buttonStyle={styles.iconButton}
        title={"Back"}
        onPress={() => navigation.navigate("Start1 Screen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});