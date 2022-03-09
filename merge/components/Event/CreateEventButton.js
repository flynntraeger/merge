import React from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateEventButton(props) {
    const navigation = useNavigation();
    return (
        <Pressable 
        onPress={()=>navigation.navigate("Create Event Screen")} style={styles.container}>
            <Text style={styles.buttonText}> Create a New Event </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
   container: {
      width: '70%',
      height: '6%',
      backgroundColor: '#57B288',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      position: 'absolute',
      top: 25,
      fontSize: 26
    },
    buttonText: {
      fontSize: 26
    }
  });
