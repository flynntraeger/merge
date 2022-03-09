import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import ListedEvent from '../components/Event/ListedEvent';
import CreateEventButton from '../components/Event/CreateEventButton';
import DividerWithText from '../components/Divider/DividerWithText';
import { ScrollView } from 'react-native-gesture-handler';

export default function EventsScreen({ route, navigation}) {
    const params = route.params;
	//notif screen code blah blah
    return (
        <View style={styles.container}>
          <TopBar title="My Events" desc="View your gaming schedule"/>
          <ScrollView style={styles.scroll}>
              <View style={styles.body}>
                  <CreateEventButton />
                  <DividerWithText text="Upcoming Events" />
                  <ListedEvent eventTitle="Among Us, Jackbox, more!!!" month="Feb" day="18" time="6:00PM" numInvites="8" topGame="Among Us"/>
                  <ListedEvent eventTitle="Vibe and Play" month="Feb" day="21" time="7:30PM" numInvites="5" topGame="JackBox"/>
                  <DividerWithText text="Current Events" />
                  <ListedEvent eventTitle="Dubway's Day to Choose" month="Feb" day="14" time="3:00PM" numInvites="3" topGame="GangBeasts"/>
                  <DividerWithText text="Previous Events" />
                  <ListedEvent eventTitle="Torture Session" month="Jan" day="24" time="6:00PM" numInvites="4" topGame="LoL"/>
                  <ListedEvent eventTitle="Gaming w/ da homies" month="Jan" day="5" time="3:00PM" numInvites="5" topGame="Valorant"/>
                  <ListedEvent eventTitle="Merry Chrysler" month="Dec" day="26" time="8:00PM" numInvites="12" topGame="Fall Guys"/>
                  <ListedEvent eventTitle="Raiding Party" month="Dec" day="12" time="2:00PM" numInvites="4" topGame="Monster Hunt"/>
                  <ListedEvent eventTitle="Squad Up" month="Nov" day="29" time="7:00PM" numInvites="3" topGame="Apex Legends"/>
              </View>
          </ ScrollView>
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
    marginBottom: 370
  },
});