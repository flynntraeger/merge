import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import CreateEventNameSection from '../components/Event/CreateEventNameSection';
import CreateEventInviteFriendsSection from '../components/Event/CreateEventInviteFriendsSection';
import CreateEventScheduleSection from '../components/Event/CreateEventScheduleSection';
import CreateEventGamesSection from '../components/Event/CreateEventGamesSection';

export default function EventsScreen({ route, navigation}) {
    const params = route.params;
	//wip
    return (
        <View style={styles.container}>
            <TopBar title="Create New Event" desc="Let's plan something!"/>
            <ScrollView style={styles.scroll}>
                <View style={styles.body}>
                  <CreateEventNameSection />
                  <CreateEventInviteFriendsSection/>
                  <CreateEventScheduleSection/>
                  <CreateEventGamesSection/>
                </View>
            </ScrollView>
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
  scroll: {
    width: '100%'
  },
  body: {
    width:"100%",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 750
  },
});