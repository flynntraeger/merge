import { StyleSheet } from 'react-native';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotifScreen from './screens/NotifScreen';
import IndividualDMScreen from './screens/IndividualDMScreen';
import DMsScreen from './screens/DMsScreen';
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BondsScreen from './screens/BondsScreen';
import Start1Screen from './screens/Start1Screen';
import Start2Screen from './screens/Start2Screen';
import Start3Screen from './screens/Start3Screen';
import CreateEventScreen from './screens/CreateEventScreen';

const SHOW_START_SCREENS = true;

const Stack = createStackNavigator();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            showNav: !SHOW_START_SCREENS,
        };
    }

    setUsername = (username) => {
        this.setState({ username });
    }

    setShowNav = (showNav) => {
        this.setState({ showNav });
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ animationEnabled: false }}>
                    {
                        SHOW_START_SCREENS ?
                            (
                                [<Stack.Screen name="Start1 Screen" component={Start1Screen} options={{ headerShown: false }} initialParams={{ setUsername: this.setUsername }} />,
                                <Stack.Screen name="Start2 Screen" component={Start2Screen} options={{ headerShown: false }} />,
                                <Stack.Screen name="Start3 Screen" component={Start3Screen} options={{ headerShown: false }} initialParams={{ setShowNav: this.setShowNav }} />]
                            ) : null
                    }
                    <Stack.Screen name="Home Screen" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Notif Screen" component={NotifScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="DMs Screen" component={DMsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Events Screen" component={EventsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Bonds Screen" component={BondsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Individual Message Screen" component={IndividualDMScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Create Event Screen" component={CreateEventScreen} options={{ headerShown: false }} />
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
