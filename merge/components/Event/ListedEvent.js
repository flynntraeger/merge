import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Update this to use this.props.eventTitle / Time / numInvites / topGame 

export default function ListedEvent(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Text style={styles.leftBoxText}> Feb </Text>
                <Text style={styles.leftBoxText}> 18 </Text>
            </View>
            <View style={styles.mainBox}>
                <Text style={styles.mainBoxTopText}> Among Us, Jackbox, more!!! </Text>
                <Text style={styles.mainBoxBotText}> @6:00PM | 8 invites | Among Us </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '13%',
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
      paddingHorizontal: 20
    },
    leftBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#484848',
        paddingHorizontal: 10
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
