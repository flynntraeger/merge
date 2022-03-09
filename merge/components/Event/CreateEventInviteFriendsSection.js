import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';

//Technically this needs added functionality to actually fetch usernames in system and display added,
//currently hardcoded

export default function CreateEventInviteFriendsSection() {
    const [searchText, setSearchText] = useState("");
    const [nameOne, setNameOne] = useState("");
    const [nameTwo, setNameTwo] = useState("");
    const [numOtherFriends, setNumOtherFriends] = useState(0);
    const [overTwo, setOverTwo] = useState(false);

    function setNames(name) {
        if (nameOne=="") {
            setNameOne(name);
        }
        else if (nameTwo=="") {
            setNameTwo(', ' + name);
        }
        else {
            setOverTwo(true);
            setNumOtherFriends(numOtherFriends + 1);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionText}>
                Invite Friends!
            </Text>
            <SearchBar
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarTextArea}
                placeholder="Search by username..."
                onChangeText={(value) => setSearchText(value)}
                onClear={() => setNames(searchText)}
                value={searchText}
                inputStyle={styles.searchBarText}
                searchIcon={{ color: "#888888" }}
                clearIcon={{ color: "#888888" }}
                placeholderTextColor={"#888888"}
                autoCorrect={false}
                selectionColor='#888888'
            />
            <View style={styles.bottomTextWrap}>
                <Text style={styles.bottomText}>Currently added: {nameOne}{nameTwo}</Text> 
                {overTwo && <Text style={styles.bottomText}>, and {numOtherFriends} more...</Text>} 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: '31%',
      flexDirection:"column",
      justifyContent: "center",
      paddingHorizontal: 25,
      paddingVertical: 10,
      backgroundColor:'#1D1D1D'
    },
    searchBarTextArea: {
      backgroundColor: "#313131",
      height: '20%'
    },
    searchBarText: {
      color: "#57B288",
      fontSize: 16
    },
    searchBarContainer: {
      width: '98%',
      borderTopWidth: 0,
      borderBottomWidth: 0,
      padding: 0,
      paddingTop: 5,
      backgroundColor: '#1D1D1D',
      height: '40%'
    },
    sectionText: {
      color: '#FFFFFF',
      fontSize: 19,
      paddingBottom: 5
    },
    bottomText: {
        color: '#888888'
    },
    bottomTextWrap: {
      flexDirection: 'row'
    }
  });
