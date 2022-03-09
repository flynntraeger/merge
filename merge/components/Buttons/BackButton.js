import React from 'react';
import { View, StyleSheet, Text, Pressable} from 'react-native';
import { ArrowLeft } from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function BackButton({backText, screenToNavigateTo}) {
    const navigation = useNavigation();

    return (
        <Pressable onPress={()=> navigation.navigate(screenToNavigateTo)}>
            <View style={styles.buttonWrap}>
                <ArrowLeft stroke='#57b288' width={26} height={26} />
                <Text style={styles.buttonText}> {backText} </Text>
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