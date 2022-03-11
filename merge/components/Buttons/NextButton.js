import React from 'react';
import { View, StyleSheet, Text, Pressable} from 'react-native';
import { ArrowRight } from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function NextButton({nextText, screenToNavigateTo, username, overlayFunc, showNav}) {
    const navigation = useNavigation();

    function buttonFunction(screenToNavigateTo) {
        if (screenToNavigateTo=="") {
            overlayFunc(true);
        }
        else {
             if (showNav) {
                  showNav(true);
             }
             navigation.navigate(screenToNavigateTo, {username: username});
        }
    }

    return (
        <Pressable onPress={()=> buttonFunction(screenToNavigateTo)}>
            <View style={styles.buttonWrap}>
                <Text style={styles.buttonText}> {nextText} </Text>
                <ArrowRight stroke='#57b288' width={26} height={26} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
      backgroundColor:'#1D1D1D',
      padding: 0,
    },
    buttonText: {
        color: '#57B288',
        fontSize: 24
    },
    buttonWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 21
    }
  });