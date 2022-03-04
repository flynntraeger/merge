import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import SendMessageBar from '../components/DirectMessage/SendMessageBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button } from 'react-native-elements';
import { ChevronLeft } from "react-native-feather";

const profiles = require('../components/Profile/profiles.json')

export default function IndividualDMScreen({ route, navigation }) {
  const params = route.params;

  return (
    <View style={styles.container}>
      <TopBar backButton={true} navigationPiece={navigation} title={params.username} desc={"Bond Level " + params.level} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {profiles.user.messages_with[params.username].messages.map((item, index) => {
          return (
            <View style={styles.messageContainer} key={index}>
              <DirectMessage
                username={item.sender}
                timestamp={item.time}
                message={item.message}
                picURL={profiles[item.sender].imgurl}
              />
            </View>
          );
        })}
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
    width: "100%"
  },
  messageContainer: {
    width: "100%",
    paddingVertical: 5
  },
  iconButton: {
    backgroundColor: "#222222",
    padding: 0
  }
});