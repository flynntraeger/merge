import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import ListedEvent from '../components/Event/ListedEvent';
import CreateEventButton from '../components/Event/CreateEventButton';

export default function EventsScreen({ route, navigation}) {
    const params = route.params;
	//notif screen code blah blah
    return (
        <View style={styles.container}>
          <TopBar title="My Events" desc="View your gaming schedule"/>
          <CreateEventButton />
          <ListedEvent />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});