import { StyleSheet } from 'react-native';
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotifScreen from './screens/NotifScreen';
import DMsScreen from './screens/DMsScreen';
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Start1Screen from './screens/Start1Screen';
import Start2Screen from './screens/Start2Screen';
import Start3Screen from './screens/Start3Screen';

const Stack = createStackNavigator();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            showNav: true,
        };
    }

    setUsername = (username) => {
        console.log(`username set to ${username}`);
        this.setState({ username });
    }

    setShowNav = (showNav) => {
        this.setState({ showNav });
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ animationEnabled: false }}>
                    <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Notif Screen" component={NotifScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="DMs Screen" component={DMsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Events Screen" component={EventsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
                {this.state.showNav ? <NavBar /> : null}
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        alignItems: 'center'
    },
});
