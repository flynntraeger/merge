import React from 'react';
import { View, StyleSheet, TextInput, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateEventNameSection() {
    const [typedText, onChangeText,] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.sectionText}>
                Name your event!
            </Text>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.input}
                onChangeText={onChangeText} 
                value={typedText}
                selectionColor='#888888'
                placeholderTextColor={"#888888"}
                autoCorrect={false}
                placeholder="Enter a title..."
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 35,
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
    input: {
        backgroundColor: '#313131',
        width: '99%',
        color: '#57B288',
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 3
    },
    inputView: {
        paddingTop: 5,
        paddingBottom: 2
    }
  });
