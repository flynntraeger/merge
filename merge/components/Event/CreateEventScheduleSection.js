import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateEventScheduleSection() {
    const [typedDateText, onChangeDateText] = React.useState("");
    const [typedTimeText, onChangeTimeText] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.sectionText}>
                Schedule your event!
            </Text>
            <View style={styles.inputView}>
                <Text style={styles.sectionText}>Date: </Text>
                <TextInput 
                style={styles.dateInput}
                onChangeText={onChangeDateText} 
                value={typedDateText}
                selectionColor='#888888'
                placeholderTextColor={"#888888"}
                autoCorrect={false}
                placeholder="02/13/2022"
                />
                <Text style={styles.sectionText}>   Time: </Text>
                <TextInput 
                style={styles.timeInput}
                onChangeText={onChangeTimeText} 
                value={typedTimeText}
                selectionColor='#888888'
                placeholderTextColor={"#888888"}
                autoCorrect={false}
                placeholder="9:45 PM"
                />
            </View>
            <Text style={styles.bottomText}>Recommended: Feb 13 @9:45 pm; Feb 17 @10:00 pm, and 10 more...</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 325,
      flexDirection:"column",
      justifyContent: "space-between",
      paddingHorizontal: 25,
      paddingVertical: 15,
      backgroundColor:'#1D1D1D'
    },
    sectionText: {
      fontSize: 19,
      color: '#FFFFFF',
      paddingBottom: 5
    },
    dateInput: {
        backgroundColor: '#313131',
        width: '31%',
        color: '#57B288',
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 3
    },
    timeInput: {
        backgroundColor: '#313131',
        width: '23.5%',
        color: '#57B288',
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 3
    },
    inputView: {
        paddingTop: 5,
        paddingBottom: 7,
        flexDirection: 'row',
    },
    bottomText: {
        color: '#888888'
    }
  });
