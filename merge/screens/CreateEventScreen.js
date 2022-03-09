import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import CreateEventNameSection from '../components/Event/CreateEventNameSection';
import CreateEventInviteFriendsSection from '../components/Event/CreateEventInviteFriendsSection';
import CreateEventScheduleSection from '../components/Event/CreateEventScheduleSection';

export default function EventsScreen({ route, navigation}) {
    const params = route.params;
	//wip
    return (
        <View style={styles.container}>
          <TopBar title="Create New Event" desc="Let's plan something!"/>
          <CreateEventNameSection />
          <CreateEventInviteFriendsSection/>
          <CreateEventScheduleSection/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});