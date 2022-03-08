import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import SendMessageBar from '../components/DirectMessage/SendMessageBar';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTopBox from '../components/Profile/ProfileTopBox';
import { Tab, TabView } from 'react-native-elements';

export default function ProfileScreen({ route, navigation}) {
    const params = route.params;
    const [index, setIndex] = React.useState(0);
    return (
        <View style={styles.container}>
            <ProfileHeader />
            <ProfileTopBox username={"CodewordPickle"}/>
            <View style={styles.tabCont}>
              <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                  backgroundColor: '#57B288',
                  height: 2,
                }}
              >
                <Tab.Item
                  title="Games"
                  buttonStyle={{backgroundColor:'#353535', borderTopLeftRadius: 10}}
                  titleStyle={styles.tabTitle}
                />
                <Tab.Item
                  title="Schedule"
                  buttonStyle={{backgroundColor:'#353535'}}
                  titleStyle={styles.tabTitle}
                />
                <Tab.Item
                  title="Bonds"
                  buttonStyle={{backgroundColor:'#353535', borderTopRightRadius: 10}}
                  titleStyle={styles.tabTitle}
                />
              </Tab>
            </View>
            <View style={styles.pageCont}>
              <TabView value={index} onChange={setIndex} animationType="timing">
                <TabView.Item style={{ backgroundColor:'#353535', width: '100%' }}>
                  <View style={styles.pageSubCont}>
                    <Text>Pinned:</Text>
                    <Text>All Owned:</Text>
                  </View>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor:'#353535', width: '100%' }}>
                  <Text>More Stuff</Text>
                </TabView.Item>
                <TabView.Item style={{backgroundColor:'#353535', width: '100%' }}>
                  <Text>And More Stuff</Text>
                </TabView.Item>
              </TabView>
            </View>
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
  tabTitle: {
    color: "white",
    textTransform: "capitalize"
  },
  tabBox: {
    backgroundColor:'#353535'
  },
  tabCont: {
    width:"95%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow:"hidden",
    marginTop: 15
  },
  pageCont: {
    width:"95%",
    height:"30%",
    overflow: "hidden"
  },
  pageSubCont: {
    flex: 1,
    margin: 15,
    flexDirection:"column",
    backgroundColor: "red"

  }
});