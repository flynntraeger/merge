import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Chip } from 'react-native-paper';

const profiles = require('./profiles.json')

class ProfileTopBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.nameText}>{this.props.username}</Text>
                <Text style={styles.typeText}>{profiles[this.props.username].type}</Text>
            </View>
            <Text style={styles.bio}>{profiles[this.props.username].about}</Text>
            <Text style={styles.subheader}>Favorite Genres</Text>
            <View style={styles.chipRow}>
              {profiles[this.props.username].favGen.map((item, index) => {
                return (
                  <Chip key={index} style={styles.chip} textStyle={styles.chipText}>{item}</Chip>
                );
              })}
            </View>
            <Text style={styles.subheader}>Community Tags</Text>
            <View style={styles.chipRow}>
              {profiles[this.props.username].comTags.map((item, index) => {
                return (
                  <Chip key={index} style={styles.chip} textStyle={styles.chipText}>{item}</Chip>
                );
              })}
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: "95%",
      borderRadius: 10,
      flexWrap: "wrap",
      flexDirection:"column",
      justifyContent: "flex-start",
      padding: 20,
      paddingTop: 15,
      backgroundColor:'#353535',
      fontFamily: 'Manrope',
      marginVertical: 5,
    },
    topRow: {
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingBottom: 5
    },
    nameText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'left',
        marginRight: 10
    },
    typeText: {
      fontSize: 14,
      textAlign: 'right',
      color: "#888888",
      marginBottom: 2
    },
    subheader: {
        fontSize: 15,
        marginTop: 10,
        color: "#ffffff",
        fontWeight: "100",
        textAlign: 'left',
        width: "100%"
    },
    bio: {
      fontSize: 15,
      color: "#DDDDDD",
      fontWeight: "100",
      textAlign: 'left',
      width: "100%"
    },
    chip: {
      color: "#57B288",
      backgroundColor: '#353535',
      borderColor: "#57B288",
      borderWidth: 1,
      marginRight: 5,
      marginTop: 7,
      height: 27,
      justifyContent: "center"

    },
    chipText: {
      color: "#57B288",
      fontSize: 12
    },
    chipRow: {
      flexDirection: "row",
      flexWrap: "wrap"
    }
  });

export default ProfileTopBox;