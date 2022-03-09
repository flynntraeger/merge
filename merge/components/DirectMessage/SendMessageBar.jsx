import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import { Home, Bell, Mail, Calendar, User, PlusSquare, Upload, ArrowRightCircle } from "react-native-feather";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const profiles = require('../../components/Profile/profiles.json');

export default function SendMessageBar({showMessage, onChangeShow, newMessage, username}) {
    const [typedText, onChangeText] = React.useState("");

    const [currentTime, getCurrentTime] = React.useState(Date().toLocaleString().substring(16,21))
    const [AMorPM, getAMPM] = React.useState(parseInt(currentTime.substring(0, 2)) < 13 ? "AM" : "PM")
    const [addCurrTimeString, addCurrTime] = React.useState("Today @ " + currentTime + AMorPM)
    
    console.log(currentTime)
    return (
        <View style={styles.container}>
            <Button 
                icon={<PlusSquare stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
            />
            <Button 
                icon={<Upload stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
            />
            <TextInput 
                style={styles.input}
                onChangeText={onChangeText} 
                value={typedText}
                selectionColor='#888888'
                placeholderTextColor={"#888888"}
                autoCorrect={false}
                placeholder="Send a message..."
                onSubmitEditing={() => {
                    if (typedText !== "") {
                        onChangeShow(!showMessage);
                        onChangeText("");
                        profiles.user.messages_with[username].messages.push({"sender": "CodewordPickle", "time": addCurrTimeString, "message": typedText});
                    }
            }}
            />
            <Button 
                icon={<ArrowRightCircle stroke='#57b288' width={26} height={26} />}
                buttonStyle={styles.iconButton}
                onPress={() => {
                    if (typedText !== "") {
                        onChangeShow(!showMessage);
                        onChangeText("");
                        profiles.user.messages_with[username].messages.push({"sender": "CodewordPickle", "time": addCurrTimeString, "message": typedText});
                    }
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      bottom: 76,
      flexDirection:"row",
      justifyContent: "space-between",
      fontFamily: 'Manrope',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor:'#1D1D1D'
    },
    iconButton: {
      backgroundColor:'#1D1D1D',
      padding: 0,
    },
    input: {
        backgroundColor: '#313131',
        width: '70%',
        color: '#888888',
        paddingHorizontal: 10,
        borderRadius: 3
    }
  });
