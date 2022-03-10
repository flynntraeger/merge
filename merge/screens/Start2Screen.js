import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Togglebox from "../components/Togglebox/Togglebox";

export default function Start2Screen({ route, navigation }) {
    const params = route.params;
    const [searchText, setSearchText] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.topHalf}>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>What style of gamer are you?</Text>
                    <View style={styles.toggleList}>
                        <Togglebox title="New" />
                        <Togglebox title="Casual" />
                        <Togglebox title="Competitive" />
                    </View>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>What genres do you like to play?</Text>
                    <View style={styles.toggleList}>
                        {(() => [
                            "MMORPG",
                            "First Person Shooter",
                            "RTS",
                            "MOBA",
                            "Action",
                            "Adventure",
                            "Roleplaying",
                            "Horror",
                            "Puzzle",
                            "Strategy",
                            "Simulation",
                            "Open-world",
                            "Indie",
                            "Gacha",
                        ].map(genre => <Togglebox title={genre} key={genre + "-genre"} />))()}
                        <Togglebox title="+" />
                    </View>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Add your games</Text>
                    <TouchableOpacity style={{
                        backgroundColor: "#57B288",
                        paddingVertical: 12,
                        marginTop:5,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require("../assets/steam.png")} />
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Import from Steam</Text>
                    </TouchableOpacity>
                    <Text style={{ marginVertical: 10, fontSize: 20, color: "white", }}> - OR - </Text>
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
            </View>
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => { navigation.navigate("Start1 Screen") }}
                >
                    <Image style={{
                        marginRight: 15,
                        width: 9,
                        height: 16
                    }}
                        source={require("../assets/arrow_left.svg")} />
                    <Text style={styles.navButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => { navigation.navigate("Start3 Screen") }}
                >
                    <Text style={styles.navButtonText}>Next</Text>
                    <Image style={{
                        marginLeft: 15,
                        width: 9,
                        height: 16
                    }}
                        source={require("../assets/arrow_right.svg")} />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: "#222222",
        padding: 40
    },
    topHalf: {
        width: "100%"
    },
    formRow: {
        marginBottom: 20,
    },
    formRowText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },
    bottomBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    toggleList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    searchBarContainer: {
        width: "100%",
        borderTopWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: "#E7E7E7",
        borderRadius: 50,
        height:40

    },
    searchBarTextArea: {
        backgroundColor: "#E7E7E7",
        height:25
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