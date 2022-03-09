import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';

export default function CreateEventInviteFriendsSection() {
    const [searchText, setSearchText] = useState("");

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
                value={searchText}
                inputStyle={styles.searchBarText}
                searchIcon={{ color: "#888888" }}
                clearIcon={{ color: "#888888" }}
                placeholderTextColor={"#888888"}
                selectionColor='#888888'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: '31%',
      flexDirection:"column",
      justifyContent: "space-between",
      paddingHorizontal: 25,
      paddingVertical: 15,
      backgroundColor:'#1D1D1D'
    },
    searchBarTextArea: {
      backgroundColor: "#313131"
    },
    searchBarText: {
      color: "#888888"
    },
    searchBarContainer: {
      width: 375,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      backgroundColor: "#222222"
    },
    sectionText: {
      color: '#FFFFFF',
      fontSize: 19
    }
  });
