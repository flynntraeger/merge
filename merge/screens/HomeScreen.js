import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';

const profiles = require('../components/Profile/profiles.json')

export default function HomeScreen({ route, navigation}) {
    const params = route.params;
    return (
        <View style={styles.container}>
          <TopBar title="My Home" desc="View your connections"/>
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