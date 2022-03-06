import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/TopBar/TopBar';
import DirectMessage from '../components/DirectMessage/DirectMessage';
import GameInvite from '../components/GameInvite/GameInvite';
import GameCard from '../components/GameCard/GameCard';
import UserCard from '../components/UserCard/UserCard';
import NetworkGraph from 'react-native-network-graph';
import * as Svg from 'react-native-svg';

export default function HomeScreen({ route, navigation}) {
    const params = route.params;
    const [selectedCircleIndex, setCircleIndex] = useState(0);
    let connections = {
      "1":[2,4], //node at index 1 is connected to nodes at index 2 and 4 respectively.
      "2":[6,7] //node at index 2 is connected to nodes at index 6 and 7 respectively.
    };
    let circleTitles = ['C1','C2', 'C3', 'C4', 'C5','C6', 'C7', 'C8', 'C9'];

    return (
        <View style={styles.container}>
          <TopBar title="My Home" desc="View your connections"/>
          <View>
        <NetworkGraph
          selectedCircleIndex={this.state.selectedCircleIndex} //so that clicks on the circles reflect results in real time.
          circleTitles={circleTitles}
          connections={connections}
          containerHeight={300}
          containerWidth={300}
          centralCircleRadius={30}
          otherCircleLinesColor="black"
          otherCirclesRadius={20}
          distanceFromCenter={100}
          onCircleClick={setCircleIndex}/>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#222222",
    color: "#ffffff",
    alignItems: 'center'
  },
});