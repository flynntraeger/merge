
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
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: 'Manrope',
        paddingHorizontal: 40,
        paddingVertical: 25,
        backgroundColor: '#1D1D1D'
    },
    iconButton: {
        backgroundColor: '#1D1D1D',
        padding: 0,
    }
});

export default UserProfile;