import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Badge } from 'react-native-paper';
import { Sun, BellOff, Moon } from "react-native-feather";

//Change Sun to BellOff or Moon based on what status is passed in to this, same with badge style backgroundColor
//this component should probably take in banner bg, profile pic, and status

class ProfileHeader extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
        <View style={styles.container}>
            <ImageBackground source={{uri: this.props.bannerURL}} resizeMode="cover" style={styles.banner}>
                <Avatar 
                    style={styles.profilePic}
                    source={{uri: this.props.pfpURL}} 
                    //this.props.picURL; fix the hardcoded images later
                />
            </ ImageBackground>
            <Badge style={styles.badge}>
            </Badge> 
            <Sun style={styles.statusIcon} stroke="#222222"/>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 0
    },
    profilePic: {
        width: 135,
        height: 135,
        borderRadius: 135 / 2,
        overflow: "hidden",
        borderWidth: 2.5,
        borderColor: "#222222"
    },
    banner: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    badge: {
        position: 'absolute',
        top: '76%',
        left: '61%',
        transform: [{ scale: 2}],
        backgroundColor: "#95cf97",
        borderWidth: 1,
        borderColor: "#222222"
    },
    statusIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        color:"#222222",
        top: '75%',
        left: '60.6%'
    }
  });

  
export default ProfileHeader;