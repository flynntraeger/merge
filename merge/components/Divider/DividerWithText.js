import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DividerWithText(props) {
    const navigation = useNavigation();
    return (
            <View style={styles.wrap}>
              <View style={styles.line} />
              <View>
                <Text style={styles.text}> {props.text} </Text>
              </View>
              <View style={styles.line} />
            </View>
    );
}

const styles = StyleSheet.create({
   wrap: {
      flexDirection: 'row', 
      alignItems: 'center', 
      position: 'relative', 
      top: 95, 
      width:'90%'
   },
   line: {
      flex: 1,
      height: 1,
      backgroundColor: '#888888'
   },
   text: {
      textAlign: 'center',
      color: '#888888',
      paddingHorizontal: 10
   },
  });