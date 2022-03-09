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

const events = require('../components/Event/events.json')

export default function EventsScreen({ route, navigation}) {
    const params = route.params;

    return (
        <View style={styles.container}>
          <TopBar title="My Events" desc="View your gaming schedule"/>
          <ScrollView style={styles.scroll}>
              <View style={styles.body}>
                  <CreateEventButton />
                  {
                    events.map((item, index) => {
                      return (
                        (item.month === "Divider" ? 
                        <DividerWithText key={index} text={item.desc}/> :
                        <ListedEvent key={index} eventTitle={item.eventTitle} month={item.month} day={item.day} time={item.time} numInvites={item.numInvites} topGame={item.topGame}/>
                        )
                      )
                    })
                  }
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
    marginBottom: 200
  },
});