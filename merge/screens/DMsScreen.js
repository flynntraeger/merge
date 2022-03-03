import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import MessageHeader from '../components/MessageHeader/MessageHeader';
import { SearchBar } from 'react-native-elements';
import { Divider } from 'react-native-paper';

export default function DMsScreen({ route, navigation}) {
    const params = route.params;
    const [searchText, setSearchText] = useState("hsafbhjasbfjbdhjs");

    return (
        <View style={styles.container}>
          <TopBar title="My Messages" desc="Chat with your bonds"/>
            <SearchBar
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchBarTextArea}
              placeholder="Search by username..."
              onChangeText={(value)=>setSearchText(value)}
              value={searchText}
              inputStyle={styles.searchBarText}
              searchIcon = {{color: "#888888"}}
              clearIcon = {{color: "#888888"}}
              placeholderTextColor = {"#888888"}
            />
            <MessageHeader 
              username={"Naftyy"}
              timestamp={"10:00 AM "}
              value={10}
              message={"ajhbfj ajhbfdjh jhafbdfjh am aljndf al,jdfn"}
              picURL={"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/103/original/Killua_2.jpg?1621356497"}
            />
            <MessageHeader 
              username={"Naftyy"}
              timestamp={"10:00 AM "}
              value={10}
              message={"ajhbfj ajhbfdjh jhafbdfjh am aljndf al,jdfn"}
              picURL={"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/103/original/Killua_2.jpg?1621356497"}
            />
            <MessageHeader 
              username={"Naftyy"}
              timestamp={"10:00 AM "}
              value={10}
              message={"ajhbfj ajhbfdjh jhafbdfjh am aljndf al,jdfn"}
              picURL={"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/009/103/original/Killua_2.jpg?1621356497"}
            />
            
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
    width:"95%",
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