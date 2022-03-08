import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Togglebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: false,
        };
    }

    render() {
        return (
            <TouchableOpacity
                style={this.state.enabled ? styles.enabledBg : styles.disabledBg}
                onPress={() => this.setState(prevState => ({ enabled: !prevState.enabled }))}
            >
                <Text style={this.state.enabled ? styles.enabledText : styles.disabledText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const buttonBaseStyle = {
    padding: 10,
    borderRadius: 15,
    borderColor: "#57B288",
    borderWidth: 1,
    margin: 5,
};

const textBaseStyle = {
    fontSize: 20,
};

const styles = StyleSheet.create({
    enabledBg: {
        backgroundColor: "#57B288",
        ...buttonBaseStyle,
    },
    disabledBg: {
        ...buttonBaseStyle,
    },
    enabledText: {
        color: "white",
        ...textBaseStyle,
    },
    disabledText: {
        color: "#57B288",
        ...textBaseStyle,
    },
});