import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import MessageHeader from '../components/MessageHeader/MessageHeader';
import { SearchBar } from 'react-native-elements';
import { Divider } from 'react-native-paper';

const profiles = require('../components/Profile/profiles.json')

export default function DMsScreen({ route, navigation}) {
    const params = route.params;
    const [searchText, setSearchText] = useState("");
    console.log(profiles.user.messages_with[0])
    return (
        <View style={styles.container}>
          <TopBar title="My Messages" desc="Chat with your bonds"/>
            <ScrollView contentContainerStyle={{width:"100%"}}>
            <SearchBar
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchBarTextArea}
              placeholder="Search by username..."
              onChangeText={(value)=>setSearchText(value.toLowerCase())}
              value={searchText}
              inputStyle={styles.searchBarText}
              searchIcon = {{color: "#888888"}}
              clearIcon = {{color: "#888888"}}
              placeholderTextColor = {"#888888"}
            />
            {Object.keys(profiles.user.messages_with[0]).filter(item => item.toLowerCase().startsWith(searchText)).map((item, index)=> {
              console.log(profiles[item].imgurl);
              return <MessageHeader 
                username={item}
                key={index}
                timestamp={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 1].time}
                value={profiles.user.messages_with[0][item][0]}
                message={profiles.user.messages_with[0][item][profiles.user.messages_with[0][item].length - 1].message}
                picURL={profiles[item].imgurl}
              />;
            })}
            </ScrollView>
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
  searchBarContainer: {
    width:375,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: "#222222"
  },
  searchBarTextArea: {
    backgroundColor: "#1D1D1D"
  },
  searchBarText: {
    color:"#888888"
  }
});