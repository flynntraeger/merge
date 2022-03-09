import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import CreateEventNameSection from '../components/Event/CreateEventNameSection';
import CreateEventInviteFriendsSection from '../components/Event/CreateEventInviteFriendsSection';
import CreateEventScheduleSection from '../components/Event/CreateEventScheduleSection';
import CreateEventGamesSection from '../components/Event/CreateEventGamesSection';
import BackButton from '../components/Buttons/BackButton';
import NextButton from '../components/Buttons/NextButton';
import { Overlay } from 'react-native-elements';
import React from 'react';
import { useState, useEffect } from 'react';

//Change Confirm button on line 65 to create the new event JSON and navigate back to Events Screen
// (currently it only navigates back to the Events Screen, but that screen should be updated)

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

    const [filledCorrectly, setFilledCorrectly] = useState(false);
    const [start, setStart] = useState(true);

    //Makeshift function to at least stop some errors or wacky screens from getting through
    function checkFilledCorrectly() {
        if (typedText !== "" && nameOne !== "" && typedDateText !== "" && typedTimeText !== "" && gameOne !== "") {
            setFilledCorrectly(true);
        }
    }

    const [visible, setVisible] = useState(false);

    function toggleOverlay(bool) {
        checkFilledCorrectly();
        if (filledCorrectly && bool || !bool) {
            setVisible(bool);
        }
        setStart(false);
    }

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
                  {!filledCorrectly && !start && <Text style={styles.errorText}> Please fill out all the fields! </Text>}
                  <View style={styles.backButtonView}>
                      <BackButton backText="Back" screenToNavigateTo="Events Screen"/>
                  </View>
                  <View style={styles.nextButtonView}>
                      <NextButton nextText="Finish" screenToNavigateTo="" overlayFunc={toggleOverlay}/>
                  </View>
                </View>
            </ScrollView>
            <Overlay isVisible={visible} overlayStyle={styles.overlay} back>
              <Text style={styles.topText}> Finalize Your Event! </Text>
              <Text style={styles.line}>                                                                       </Text>
              <View style={styles.mainBox}>
                <Text style={styles.mainText}> Okay! You're scheduled to play {gameOne} on {typedDateText} at {typedTimeText} for {typedText}! </Text>
              </View>
              <Text style={styles.overlayCancelText} onPress={()=>toggleOverlay(false)}> CANCEL </Text>
              <Text style={styles.overlayConfirmText} onPress={()=>navigation.navigate("Events Screen")}> CONFIRM </Text>
            </Overlay>
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
    marginBottom: 950
  },
  backButtonView: {
    width: "100%",
    position: "absolute",
    top: 805,
    flexDirection:"row",
    justifyContent: "space-between",
    left: 10,
    paddingVertical: 10
  },
  nextButtonView: {
    width: "100%",
    position: "absolute",
    top: 805,
    flexDirection:"row",
    justifyContent: "space-between",
    left: 240,
    paddingVertical: 10
  },
  overlay: {
    backgroundColor: '#000000',
    padding: 0,
    width: '70%',
    top: -72,
    height: '28%',
    alignItems: 'center',
    borderRadius: 5
  },
  topText: {
    color: '#57B288',
    fontSize: 19,
    paddingTop: 9
  },
  line: {
    color: '#57B288',
    textDecorationLine: 'underline',
    top: -6
  },
  mainText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25
  },
  mainBox: {
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  overlayCancelText: {
    color: '#57B288',
    top: 10,
    left: -90
  },
  overlayConfirmText: {
    color: '#57B288',
    top: -10,
    left: 90
  },
  errorText: {
    color: '#57B288',
    fontSize: 16,
    top: 790
  }
});