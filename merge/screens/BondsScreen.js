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

export default function BondsScreen({ route, navigation}, username) {
    const params = route.params;
    const [index, setIndex] = React.useState(0);
    return (
        <View style={styles.container}>
            <TopBar backButton={true} prevPage={"Profile Screen"} username={params.username} navigationPiece={navigation} title={"My Bonds"} desc={"View the progress of your bonds"} />
            <ScrollView style={styles.scroll}>
                <View style={styles.centerCont}>
                <View style={styles.pageCont}>
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
                <Text style={styles.subHeader}>All Bonds:</Text>
                <View style={styles.gameRow}>
                  {profiles[params.username].bonds.map((item, index) => {
                    return (<UserCard
                      key={index}
                      username={item.username}
                      level={item.level}
                      progress={item.experience}
                      picURL={profiles[item.username].imgurl}
                    />)
                  })}
                </View>
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
    borderRadius: 10,
    marginTop:15
  },
  centerCont: {
      width:"100%",
      flexDirection:"column",
      alignItems:"center"
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