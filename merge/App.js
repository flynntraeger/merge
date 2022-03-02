import { StyleSheet } from 'react-native';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotifScreen from './screens/NotifScreen';
import DMsScreen from './screens/DMsScreen';
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Notif Screen" component={NotifScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DMs Screen" component={DMsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Events Screen" component={EventsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
            <NavBar />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center'
  },
});
