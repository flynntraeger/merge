import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import AvatarSection from '../components/AvatarSection/AvatarSection';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;

    return (
        <View style={styles.container}>
            {/* <AvatarSection text="Let's get started by making your profile..." /> */}
            <View style={styles.formWrapper}>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Username</Text>
                    <TextInput
                        onChangeText={text => params.setUsername(text)}
                        style={styles.TextInput}
                        placeholder="What should we call you?"
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Email</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="A valid email address"
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.TextInput}
                        placeholder="Your strongest password"
                    />
                </View>
                <View style={styles.formRow}>
                    <TouchableOpacity style={{
                        alignItems: "center",
                        backgroundColor: "#57B288",
                        padding: 10,
                        marginBottom: 20
                    }}>
                        <Text style={{ color: "white" }}>Upload profile picture</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Add a bio</Text>
                    <TextInput
                        style={styles.TextInput}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Say something about yourself"
                    />
                </View>
            </View>
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#57B288",
                        padding: 10
                    }}
                    onPress={() => { navigation.navigate("Start2 Screen") }}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222222",
        paddingVertical: 20
    },
    TextInput: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
    },
    formRow: {
    },
    formRowText: {
        color: "white",
        marginBottom: 5
    },
    formWrapper: {
        flexGrow: 1
    },
    bottomBar: {
        flexGrow: 0,
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#57B288",
        padding: 10
    }
});