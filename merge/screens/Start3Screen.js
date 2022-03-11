import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import NextButton from '../components/Buttons/NextButton'
import BackButton from '../components/Buttons/BackButton'

export default function Start3Screen({ route, navigation }) {
    const params = route.params;
    const [searchText, setSearchText] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.formRow}>
                <Text style={styles.formRowText}>When are you free to game?</Text>
                <Image style={{ width: 310, height: 385 }} source={require("../assets/calendar.png")} />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formRowText}>Add your friends</Text>
                <SearchBar
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBarTextArea}
                    placeholder="Search by title"
                    onChangeText={value => setSearchText(value)}
                    value={searchText}
                    searchIcon={{ color: "black" }}
                    clearIcon={{ color: "black" }}
                    placeholderTextColor={"black"}
                    selectionColor='black'
                />
            </View>
            <View style={styles.bottomBar}>
                <BackButton backText="Back" screenToNavigateTo="Start2 Screen" />
                <Text>                             </Text>
                <NextButton nextText="Finish" screenToNavigateTo="Profile Screen" username="CodewordPickle" showNav={params.setShowNav}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222222",
        padding: 20,
        paddingVertical: 40,
    },
    formRow: {
        marginBottom: 20,
        width:"95%"
    },
    formRowText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },
    bottomBar: {
        flexDirection: "row",
        width: "100%",
        left: -15,
        top: 20
    },
    searchBarContainer: {
        width: "100%",
        height:40,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: "#E7E7E7",
        borderRadius: 50,
    },
    searchBarTextArea: {
        backgroundColor: "#E7E7E7",
        height: 25
    },
    navButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    navButtonText: {
        color: "#57B288",
        fontWeight: "bold",
        fontSize: 20
    },
});