import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

class GameInvite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active: this.props.active
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Text style={styles.text}>{this.props.username} sent an invite to play {this.props.game} @ {this.props.time} on {this.props.date}</Text>
            </View>
            {this.props.active ?
                <View style={styles.botRow}>
                    <Button
                        containerStyle={styles.buttonContainter}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Accept"
                        onPress={()=> {
                            this.setState({active: false});
                            if (this.props.callback) {
                                this.props.callback("Gaming session with " + this.props.username + " was added to your calender.", this.props.index);
                            }
                        }}
                    />
                    <Button
                        containerStyle={styles.buttonContainter}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Reject"
                        onPress={()=> {
                            this.setState({active: false});}}
                    />
                </View>
            :null}
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      maxWidth: "95%",
      borderWidth: 1,
      borderColor: "#57B288",
      borderRadius: 10,
      flexDirection:"column",
      justifyContent:"flex-start",
      flexWrap: "wrap",
      alignItems: "center",
      padding: 15,
      backgroundColor:'#222222',
      fontFamily: 'Manrope'
    },
    topRow: {
        flexDirection:"row",
        flexWrap: "wrap"
    },
    botRow: {
        width: "50%",
        paddingTop: 10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    button: {
        backgroundColor: "#57B288",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 15,
        marginHorizontal: 20
    },
    buttonContainter: {
        flexDirection: "row",
        justifyContent:"center"
    },
    text: {
        fontSize: 13,
        textAlign:"center",
        color: "#57B288",
    },
    buttonText: {
        fontSize: 13,
        textAlign:"center",
        color: "#222222",
    }
  });

export default GameInvite;