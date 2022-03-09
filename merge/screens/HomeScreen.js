import { useState, React, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import NetworkGraph from '../components/NetworkGraph/NetworkGraph';




const profiles = require('../components/Profile/profiles.json')

export default function HomeScreen({ route, navigation}) {
    const params = route.params;
    const [selectedCircleIndex, setSelectedCircleIndex] = useState(1);
    let connections = {
      "2":[0,1,3,4,5,6,7,8] //node at index 2 is connected to nodes at index 6 and 7 respectively.
    };
    let circleTitles = Object.keys(profiles);
    return (
        <View style={styles.container}>
          <TopBar title="My Home" desc="View your network of connections"/>
          <NetworkGraph
          selectedCircleIndex={2} //so that clicks on the circles reflect results in real time.
          circleTitles={circleTitles}
          connections={connections}
          containerHeight={600}
          containerWidth={600}
          centralCircleRadius={65}
          centralCircleStrokeColor="#57B288"
          centralCircleFillColor="#57B288"
          selectedCircleLinesColor="#888888"
          otherCircleLinesColor="#888888"
          otherCirclesRadius={50}
          otherCircleFillColor="#353535"
          distanceFromCenter={200}
          onCircleClick={(index) => navigation.navigate("Profile Screen", {username: circleTitles[index]})}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#222222",
    color: "#ffffff",
    alignItems: 'center'
  },
});