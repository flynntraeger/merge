import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';

export default function EventsScreen({ route, navigation}) {
    const params = route.params;
	//wip
    return (
        <View style={styles.container}>
          <TopBar title="Create New Event" desc="Let's plan something!"/>
          <View style={styles.textBox}>
            <Text style={styles.text}> I am dying </Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
  },
  text: {
        color: 'white'
  }
});