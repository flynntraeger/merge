import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { ChevronLeft } from "react-native-feather";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.backButton ?
          <View style={styles.buttonView}>
            <Button
              icon={<ChevronLeft stroke="#ffffff" width={25} height={30} />}
              buttonStyle={styles.iconButton}
              onPress={() => this.props.navigationPiece.navigate('DMs Screen')
              }
            />
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          :
          <Text style={styles.title}>{this.props.title}</Text>
        }
        <View style={styles.subContainer}>
          <Text style={styles.description}>{this.props.desc}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: 'Manrope',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#1D1D1D'
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  subContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#FFFFFF",
  },
  description: {
    fontSize: 13,
    textAlign: 'right',
    color: "#888888",
  },
  iconButton: {
    backgroundColor: "#1D1D1D",
    padding: 0
  }
});

export default TopBar;