import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard';

export default function CreateEventGamesSection({searchGameText, setSearchGameText, gameOne, setGameOne, gameTwo, setGameTwo, numOtherGames, setNumOtherGames, overTwoGames, setOverTwoGames}) {

    function setGames(game) {
        if (gameOne=="") {
            setGameOne(game);
        }
        else if (gameTwo=="") {
            setGameTwo(', ' + game);
        }
        else {
            setOverTwoGames(true);
            setNumOtherGames(numOtherGames + 1);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionText}>
                Add some games!
            </Text>
            <SearchBar
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarTextArea}
                placeholder="Search by title..."
                onChangeText={(value) => setSearchGameText(value)}
                onClear={() => setGames(searchGameText)}
                value={searchGameText}
                inputStyle={styles.searchBarText}
                searchIcon={{ color: "#888888" }}
                clearIcon={{ color: "#888888" }}
                placeholderTextColor={"#888888"}
                autoCorrect={false}
                selectionColor='#888888'
            />
            <View style={styles.bottomTextWrap}>
                <Text style={styles.bottomText}>Currently added: {gameOne}{gameTwo}</Text> 
                {overTwoGames && <Text style={styles.bottomText}>, and {numOtherGames} more...</Text>} 
            </View>
            <Text style={styles.bottomText}>Recommended: </Text>
            <View style={styles.gameRow}>
              <GameCard
                game={"Valorant"}
                picURL={"https://www.riotgames.com/darkroom/1000/d0807e131a84f2e42c7a303bda672789:5f9cc29dd5d2a50bb1a8ea2efbc97abb/valorant-offwhitelaunch-keyart.jpg"}
              />
              <GameCard
                game={"Minecraft"}
                picURL={"https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"}
              />
              <GameCard
                game={"Genshin"}
                picURL={"https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/09/30/26b53ef6-0237-11eb-88c7-25dcd0ae6080_image_hires_051230.JPG?itok=gKu8RgUe&v=1601413957"}
              />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 500,
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
      height: 40
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
    },
    gameRow: {
      marginVertical: 15,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    }
  });
