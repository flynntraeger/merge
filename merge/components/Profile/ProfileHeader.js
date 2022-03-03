import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function ProfileHeader() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.imgur.com/gXlEWfc.jpg'}} resizeMode="cover" style={styles.banner}>
                <Avatar 
                    style={styles.profilePic}
                    source={{uri: "https://i.imgur.com/FaB0CFp.png"}} 
                    //this.props.picURL; fix this hardcoded image later
                />
            </ ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 0
    },
    iconButton: {
      backgroundColor:'#1D1D1D',
      padding: 0,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "black"
    },
    banner: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    }
  });