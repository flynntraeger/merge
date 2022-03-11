import { useState, React, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import Notification from '../components/Notification/Notification';
import GameNotif from '../components/Notification/GameNotif';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import { ScrollView } from 'react-native-gesture-handler';

const profiles = require('../components/Profile/profiles.json')
const notifs = require('../components/Notification/notifications.json')

export default function NotifScreen({ route, navigation}) {
    const params = route.params;

    const [isUpdate, setUpdate] = useState(true);

    const pushUpdate = (message, index) => {
      notifs[index].active = false;
      notifs.unshift({
        "title": "GameNotif",
        "user": "", 
        "message": message,
        "active": false}
      );
      setUpdate(!isUpdate);
    }

    return (
        <View style={styles.container}>
          <TopBar title="My Feed" desc="View your latest notifications"/>
          <ScrollView contentContainerStyle={{ width: "100%", marginTop: 10, paddingBottom: 100}}>
          {notifs.map((item, index) => {
            return (item.title === "GameNotif" ?
            <GameNotif
              key={index}
              title = {item.title}
              user = {item.user}
              message = {item.message}
              active = {item.active}
              callback = {pushUpdate}
              index = {index}
            />
            : <Notification
              key={index}
              title = {item.title}
              user = {item.user}
              message = {item.message}
              timestamp = {item.time}
              picURL = {profiles[item.user].imgurl}
            />
            )
          })}
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#222222",
    color: "#ffffff",
    alignItems:"center",
  },
});