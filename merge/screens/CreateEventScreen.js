import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import CreateEventNameSection from '../components/Event/CreateEventNameSection';
import CreateEventInviteFriendsSection from '../components/Event/CreateEventInviteFriendsSection';
import CreateEventScheduleSection from '../components/Event/CreateEventScheduleSection';
import CreateEventGamesSection from '../components/Event/CreateEventGamesSection';
import React from 'react';
import { useState, useEffect } from 'react';

export default function EventsScreen({ route, navigation}) {
    const params = route.params;
	const [typedText, onChangeText] = useState("");
    const [searchText, setSearchText] = useState("");
    const [nameOne, setNameOne] = useState("");
    const [nameTwo, setNameTwo] = useState("");
    const [numOtherFriends, setNumOtherFriends] = useState(0);
    const [overTwo, setOverTwo] = useState(false);
    const [typedDateText, onChangeDateText] = React.useState("");
    const [typedTimeText, onChangeTimeText] = React.useState("");
    const [searchGameText, setSearchGameText] = useState("");
    const [gameOne, setGameOne] = useState(""); 
    const [gameTwo, setGameTwo] = useState("");
    const [numOtherGames, setNumOtherGames] = useState(0);
    const [overTwoGames, setOverTwoGames] = useState(false);

    return (
        <View style={styles.container}>
            <TopBar title="Create New Event" desc="Let's plan something!"/>
            <ScrollView style={styles.scroll}>
                <View style={styles.body}>
                  <CreateEventNameSection typedText={typedText} onChangeText={onChangeText} />
                  <CreateEventInviteFriendsSection searchText={searchText} setSearchText={setSearchText} nameOne={nameOne} setNameOne={setNameOne} nameTwo={nameTwo} setNameTwo={setNameTwo} 
                                                   numOtherFriends={numOtherFriends}  setNumOtherFriends={setNumOtherFriends} overTwo={overTwo} setOverTwo={setOverTwo}/>
                  <CreateEventScheduleSection typedDateText={typedDateText} onChangeDateText={onChangeDateText} typedTimeText={typedTimeText} onChangeTimeText={onChangeTimeText}/>
                  <CreateEventGamesSection searchGameText={searchGameText} setSearchGameText={setSearchGameText} gameOne={gameOne} setGameOne={setGameOne} gameTwo={gameTwo} setGameTwo={setGameTwo} 
                                           numOtherGames={numOtherGames}  setNumOtherGames={setNumOtherGames} overTwoGames={overTwoGames} setOverTwoGames={setOverTwoGames}/>
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
    marginBottom: 900
  },
});