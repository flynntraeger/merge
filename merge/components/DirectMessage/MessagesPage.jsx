import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';

class MessagesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        //for each message in this.props.username's messages with this.props.messagee, display alternating DirectMessage component
        {this.props.username.messages.messagee.map((bulk, i) => {     
            return (<DirectMessage
                key={i?}
                message={} // etc
                />) 
         })}
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: "95%",
      borderRadius: 10,
      flexWrap: "wrap",
      flexDirection:"row",
      justifyContent: "flex-start",
      padding: 15,
      backgroundColor:'#353535',
      fontFamily: 'Manrope'
    },
    leftCol: {
      flexDirection:"row",
      justifyContent:"flex-start"
    },
    rightCol: {
      flex:1,
      flexDirection:"column",
      paddingLeft:10
    },
    topRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom: 2
    },
    nameText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'left',
    },
    timestampText: {
      fontSize: 11,
      textAlign: 'right',
      color: "#888888",
    },
    messageText: {
        fontSize: 13,
        color: "#DDDDDD",
        fontWeight: "100",
        textAlign: 'left'
    }
  });

export default MessagesPage;