import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import { Divider } from 'react-native-paper';
import SendMessageBar from '../components/DirectMessage/SendMessageBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';

const profiles = require('../components/Profile/profiles.json')

export default function IndividualDM({ route, navigation }) {
  const params = route.params;
  console.log(profiles.user.messages_with[0])
  return (
    <View style={styles.container}>
      <TopBar title={"YungTriggz"} desc="Bond Level 15" />  {/* this needs to be inside Object.keys etc to benefit from profiles.json access when props passed down */}
      <ScrollView style={styles.scrollView}>
      {Object.keys(profiles.user.messages_with[0]).map((item, index) => { 
          return
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 7].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 7].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 7].message}
              picURL={profiles["user"].imgurl}
            />
        })};
      </ScrollView>
      <SendMessageBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 95,
    backgroundColor: "#222222",
    alignItems: 'center'
  },
  scrollView: {
    width: '70vw'
  },
  searchBarContainer: {
    width: 375,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "#222222"
  },
  searchBarTextArea: {
    backgroundColor: "#1D1D1D"
  },
  searchBarText: {
    color: "#888888"
  }
});