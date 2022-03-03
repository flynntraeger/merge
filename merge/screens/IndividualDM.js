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
        {Object.keys(profiles.user.messages_with[0]).map((item, index) => { // couldn't figure out how to iterate for components?
          // I've definitely done this in react but cant figure out what I was doing wrong. Will try again in the morning
          return <div>
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 7].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 7].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 7].message}
              picURL={profiles["user"].imgurl}
            />
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 6].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 6].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 6].message}
              picURL={profiles[item].imgurl}
            />
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 5].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 5].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 5].message}
              picURL={profiles["user"].imgurl}
            />
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 4].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 4].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 4].message}
              picURL={profiles[item].imgurl}
            />
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 3].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 3].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 3].message}
              picURL={profiles["user"].imgurl}
            />
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 2].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 2].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 2].message}
              picURL={profiles[item].imgurl}
            />
            <DirectMessage
              username={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 1].sender}
              key={index}
              timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 1].time}
              message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 1].message}
              picURL={profiles[item].imgurl}
            />
          </div>
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