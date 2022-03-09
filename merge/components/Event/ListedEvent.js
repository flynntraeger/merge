import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Probably update this to use locally stored data like with the users

export default function ListedEvent(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Text style={styles.leftBoxText}> {props.month} </Text>
                <Text style={styles.leftBoxText}> {props.day} </Text>
            </View>
            <View style={styles.mainBox}>
                <Text style={styles.mainBoxTopText}> {props.eventTitle} </Text>
                <Text style={styles.mainBoxBotText}> @{props.time} | {props.numInvites} inv. | {props.topGame} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 105,
      flexDirection:"row",
      justifyContent: 'center',
      padding: 10,
      position: 'relative',
      top: 95,
    },
    mainBox: {
      width: '80%',
      backgroundColor:'#313131',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10
    },
    leftBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#484848',
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    leftBoxText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    mainBoxTopText: {
      color: '#9DD2B9',
      fontSize: 19,
      paddingBottom: 5
    },
    mainBoxBotText: {
        color: '#BBBBBB',
        fontSize: 17,
        paddingTop: 5
    }
  });
