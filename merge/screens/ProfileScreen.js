import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import SendMessageBar from '../components/DirectMessage/SendMessageBar';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTopBox from '../components/Profile/ProfileTopBox';
import { Tab, TabView,Button } from 'react-native-elements';
import { LogOut } from 'react-native-feather';

const profiles = require('../components/Profile/profiles.json')
const games = require('../components/Games/games.json')

export default function ProfileScreen({ route, navigation}, username) {
    const params = route.params;
    const [index, setIndex] = React.useState(0);
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            <ProfileHeader />
            <View style={styles.body}>
            <ProfileTopBox username={params.username}/>
            <View style={styles.tabCont}>
              <Button title="Games" containerStyle={index === 0 ? styles.buttonContActive: styles.buttonContDefault} buttonStyle={styles.button} onPress={() => {
                setIndex(0);
              }}/>
              <Button title="Schedule" containerStyle={index === 1 ? styles.buttonContActive: styles.buttonContDefault} buttonStyle={styles.button} onPress={() => {
                setIndex(1);
              }}/>
              <Button title="Bonds" containerStyle={index === 2 ? styles.buttonContActive: styles.buttonContDefault} buttonStyle={styles.button} onPress={() => {
                setIndex(2);
              }}/>
            </View>

            <View style={styles.pageCont}>
            {index === 0 ? 
              <View>
                <Text style={styles.subHeader}>Pinned:</Text>
                <View style={styles.gameRow}>
                  {profiles[params.username].pinnedGames.map((item, index) => {
                    return (<GameCard
                      key={index}
                      game={item}
                      picURL={games[item].imgurl}
                    />)
                  })}
                </View>
                <Text style={styles.subHeader}>All Owned:</Text>
                <View style={styles.gameRow}>
                  {profiles[params.username].allGames.map((item, index) => {
                    return (<GameCard
                      key={index}
                      game={item}
                      picURL={games[item].imgurl}
                    />)
                  })}
                </View>
              </View>
            : null}
            {index === 1 ? <Text style={styles.subHeader}>[add schedule here]</Text> : null}
            {index === 2 ? 
              <View>
                <Text style={styles.subHeader}>Starred:</Text>
                <View style={styles.gameRow}>
                  {profiles[params.username].bonds.filter((item)=> item.starred === true).map((item, index) => {
                    return (<UserCard
                      key={index}
                      username={item.username}
                      level={item.level}
                      progress={item.experience}
                      picURL={profiles[item.username].imgurl}
                    />)
                  })}
                </View>
                <View style={styles.userRow}>
                  <Button
                    title={"View My Network"}
                    buttonStyle={styles.bottomButton}
                  />
                  <Button
                    title={"View All Bonds"}
                    buttonStyle={styles.bottomButton}
                  />
                </View>
              </View>
            : null}
            </View>
            </View>
            </ScrollView>
            </View>
    );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222222"
  },
  button: {
    backgroundColor: "#353535",
    borderRadius: 0,
  },
  buttonContActive: {
    flex: 1,
    backgroundColor: "#353535",
    borderRadius: 0,
    borderBottomWidth: 2,
    borderColor: "#57B288"
  },
  buttonContDefault: {
    flex: 1,
    backgroundColor: "#353535",
    borderRadius: 0
  },
  tabCont: {
    width:"95%",
    flexDirection:"row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    marginTop: 5
  },
  pageCont: {
    width:"95%",
    backgroundColor:"#353535",
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  gameRow: {
    marginVertical: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  userRow: {
    marginVertical: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  subHeader: {
    color: "white"
  },
  scroll: {
    width:"100%",
  },
  body: {
    width:"100%",
    alignItems: "center",
    marginTop: 170,
    marginBottom: 90
  },
  bottomButton: {
    backgroundColor: "#57B288",
    borderRadius: 10,
  },
});