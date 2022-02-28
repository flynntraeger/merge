
import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';

const profiles = require('./profiles.json')


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    };

    finishedLoading() {
        this.setState({ loading: false })
    }

    render() { // testing with profiles.flynn but need to generalise by passing in props
        if (this.state.loading) {
            <Text> Loading </Text>
        }
        return (
            <View style={styles.container}>
                <Image
                    style={styles.userImg}
                    source={{ uri: profiles.flynn.imgurl }}
                />
                <Text style={styles.userName}>Full Name: {profiles.flynn.fname}. Username: {profiles.flynn.uname}</Text>
                <Text style={styles.aboutUser}>
                    {profiles.flynn.aboutUser ? profiles.flynn.aboutUser : 'No details added.'}
                </Text>

                {/* {games.map((item) => (
                    <GameCard key={item.id} item={item} />
                    ))} */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      width: "95%",
      borderRadius: 10,
      flexWrap: "wrap",
      flexDirection:"row",
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor:'#353535',
      fontFamily: 'Manrope',
      color: "#FFFFFF"
    },
    rightCol: {
        width: "85%",
        flexDirection:"column",
        paddingLeft:10
    },
    tinyLogo: {
        width: "15%"
    },
    topRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom: 2
    },
    nameText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'left',
    },
    timestampText: {
      fontSize: 12,
      textAlign: 'right',
      color: "#888888",
    },
    messageText: {
        fontSize: 12,
        color: "#FFFFFF",
        fontWeight: "normal",
        textAlign: 'left'
    }
  });

export default UserProfile;