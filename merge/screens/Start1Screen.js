import React from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;

    return (
        <View style={styles.container}>
            <View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40 }}>
                    <View style={{
                        marginRight: 20,
                        padding: 20,
                        borderWidth: 1,
                        borderRadius: 15,
                        borderColor: "#57B288"
                    }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Let's get started</Text>
                        <Text style={{ color: "white", fontSize: 20 }}>on your profile!</Text>
                    </View>
                    <Image style={{ width: 100, height: 108 }} source={require("../assets/mergebot.png")} />
                </View>
                <View>
                    <View style={styles.field}>
                        <Image style={styles.fieldImage} source={require("../assets/username.svg")} />
                        <TextInput
                            onChangeText={text => params.setUsername(text)}
                            style={styles.fieldTextInput}
                            placeholder="Username"
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.field}>
                        <Image style={styles.fieldImage} source={require("../assets/email.svg")} />
                        <TextInput
                            style={styles.fieldTextInput}
                            placeholder="Email"
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.field}>
                        <Image style={styles.fieldImage} source={require("../assets/password.svg")} />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.fieldTextInput}
                            placeholder="Password"
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{
                        backgroundColor: "#57B288",
                        paddingVertical: 15,
                        marginTop: 10,
                        marginBottom: 30,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image style={{ width: 24, height: 24, marginRight: 10 }} source={require("../assets/upload.svg")} />
                        <Text style={{ color: "white", fontWeight: "bold" }}>Upload profile picture</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style={styles.bio}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Bio (optional)"
                    />
                </View>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => { navigation.navigate("Start2 Screen") }}
                >
                    <Text style={styles.navButtonText}>Next</Text>
                    <Image style={styles.navButtonImage} source={require("../assets/arrow_right.svg")} />
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
        padding: 20
    },
    field: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E7E7E7",
        borderRadius: 50,
        marginBottom: 20,
    },
    fieldImage: {
        width: 24,
        height: 24,
        marginLeft: 20,
    },
    fieldTextInput: {
        padding: 15,
        fontSize: 14,
        outlineStyle: "none",
    },
    bio: {
        backgroundColor: '#E7E7E7',
        padding: 20,
    },
    navButton: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        alignSelf: "end",
    },
    navButtonText: {
        color: "#57B288",
        fontWeight: "bold",
        fontSize: 20
    },
    navButtonImage: {
        marginLeft: 15,
        width: 9,
        height: 16
    }
});