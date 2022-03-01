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
            {this.state.active ?
                <View style={styles.botRow}>
                    <Button
                        containerStyle={styles.buttonContainter}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Accept"
                        onPress={()=> this.setState({active: false})}
                    />
                    <Button
                        containerStyle={styles.buttonContainter}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        title="Reject"
                        onPress={()=> this.setState({active: false})}
                    />
                </View>
            :null}
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: "95%",
      borderWidth: 1,
      borderColor: "#57B288",
      borderRadius: 10,
      flexDirection:"column",
      justifyContent:"flex-start",
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
        width: "75%",
        paddingTop: 10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    button: {
        backgroundColor: "#57B288",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 15
    },
    buttonContainter: {
        flexDirection: "row",
        justifyContent:"flex-start"
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