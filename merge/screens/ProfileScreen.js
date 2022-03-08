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

export default function ProfileScreen({ route, navigation}) {
    const params = route.params;
    const [index, setIndex] = React.useState(0);
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            <ProfileHeader />
            <View style={styles.body}>
            <ProfileTopBox username={"CodewordPickle"}/>
            <View style={styles.tabCont}>
              <Button title="Games" containerStyle={index === 0 ? styles.buttonContActive: styles.buttonContDefault} buttonStyle={styles.button} onPress={() => {
                setIndex(0);
                console.log(index);
              }}/>
              <Button title="Schedule" containerStyle={index === 1 ? styles.buttonContActive: styles.buttonContDefault} buttonStyle={styles.button} onPress={() => {
                setIndex(1);
                console.log(index);
              }}/>
              <Button title="Bonds" containerStyle={index === 2 ? styles.buttonContActive: styles.buttonContDefault} buttonStyle={styles.button} onPress={() => {
                setIndex(2);
                console.log(index);
              }}/>
            </View>

            <View style={styles.pageCont}>
            {index === 0 ? 
              <View>
                <Text style={styles.subHeader}>Pinned:</Text>
                <View style={styles.gameRow}>
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                </View>
                <Text style={styles.subHeader}>All Owned:</Text>
                <View style={styles.gameRow}>
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                  <GameCard game="Minecraft" picURL="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" />
                </View>
              </View>
            : null}
            {index === 1 ? <Text>hello</Text> : null}
            {index === 2 ? <Text>world</Text> : null}
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
  subHeader: {
    color: "white"
  },
  scroll: {
    width:"100%",
  },
  body: {
    width:"100%",
    alignItems: "center",
    marginTop: 190,
    marginBottom: 90
  }
});