import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import SendMessageBar from '../components/DirectMessage/SendMessageBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import { ScrollView } from 'react-native-gesture-handler';


const profiles = require('../components/Profile/profiles.json')

export default function IndividualDMScreen({ route, navigation }) {
  const params = route.params;

  const [showMessage, onChangeShow] = React.useState(false);
  const [showInvite, onChangeInvite] = React.useState(true);
  const [newMessageToAdd, addNewMessage] = React.useState("");

  const [stateProfiles, updateMessages] = React.useState(profiles);

  return (
    <View style={styles.container}>
      <TopBar backButton={true} prevPage={"DMs Screen"} navigationPiece={navigation} title={params.username} desc={"Bond Level " + params.level} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {stateProfiles.user.messages_with[params.username].messages.map((item, index) => {
          return ( index === 4 ?
            <GameInvite key={index} username={params.username} game="Minecraft" time="5:00PM" date="Feb 4" active ={true} handler={onChangeInvite}/>
            :
            <DirectMessage
                key={index}
                username={item.sender}
                timestamp={item.time}
                message={item.message}
                picURL={stateProfiles[item.sender].imgurl}
            />
          );
        })}
        {
          showMessage ? 
          <DirectMessage
            username={stateProfiles.user.uname}
            timestamp={"Today @ 11:21AM"}
            message={newMessageToAdd}
            picURL={stateProfiles.user.imgurl}
          />
          : null
        }
      </ScrollView>
      <SendMessageBar showMessage={showMessage}
        onChangeShow={(newShow) => {
          onChangeShow(newShow);
        }}
        newMessage={(messageToAdd) => {
          addNewMessage(messageToAdd);
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#222222",
    alignItems:"center",
  },
  scrollView: {
    width:"100%",
    paddingBottom:130
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