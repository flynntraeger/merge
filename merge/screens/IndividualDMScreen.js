import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import SendMessageBar from '../components/DirectMessage/SendMessageBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import { ScrollView } from 'react-native-gesture-handler';

const profiles = require('../components/Profile/profiles.json')

export default function IndividualDMScreen({ route, navigation}) {
    const params = route.params;

    return (
        <View style={styles.container}>
          <TopBar title={params.username} desc={"Level " + params.level + " Bonds"}/>
            <ScrollView contentContainerStyle={styles.scrollView}>
            {profiles.user.messages_with[params.username].messages.map((item, index) => { 
                return (
                  <DirectMessage
                    key={index}
                    username={item.sender}
                    timestamp={item.time}
                    message={item.message}
                    picURL={profiles[item.sender].imgurl}
                  />
                );
            })}
            </ScrollView>
            <SendMessageBar username={params.username}/>
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
    width:"100%",
    paddingBottom:130
  },
  messageContainer: {
    width:"100%",
    paddingVertical: 5
  }
});