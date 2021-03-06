import React, { Component } from 'react';
//React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
//source: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';
import { View} from 'react-native';
import { Image } from 'react-native-svg';

import Svg, {
  Circle,
  G,
  Line,
  Text,
  SvgUri,
  Defs,
  ClipPath
} from 'react-native-svg';
import _ from 'lodash';

import profiles from '../Profile/profiles.json'

class NetworkGraph extends Component {
  findCircleCenterCoords(index) {
    //for a given index of a circle, where is its center.
    const { circleTitles, containerHeight, containerWidth, distanceFromCenter, selectedCircleIndex } = this.props;
    const degreeDifference = Number(360 / (circleTitles.length - 1));
    if (index >= selectedCircleIndex)
      index = index - 1
    let xCordinate = containerWidth / 2 + Math.cos((index * degreeDifference - 90) * Math.PI / 180.0) * distanceFromCenter
    let yCordinate = containerHeight / 2 + Math.sin((index * degreeDifference - 90) * Math.PI / 180.0) * distanceFromCenter
    return {
      xCordinate: xCordinate,
      yCordinate: yCordinate
    }
  }

  circleClicked(index) {
    const { onCircleClick } = this.props;
    return function () {
      onCircleClick(index);
    }
  }

  addBackgroundLines(connectionType) {
    const { containerHeight, containerWidth, circleTitles, connections, otherCircleLinesColor, selectedCircleIndex } = this.props;
    let allCircleLines = Object.keys(connections).map((fromCircleIndex) => {
      if (fromCircleIndex == selectedCircleIndex)
        return null;
      let connectionsForCircle = connections[fromCircleIndex];

      let currentCircleCoordinates = this.findCircleCenterCoords(fromCircleIndex);
      let linesForCircle = connectionsForCircle.map((toCircleIndex) => {
        let targetCircleCoordinates = this.findCircleCenterCoords(toCircleIndex);
        if (toCircleIndex === selectedCircleIndex)  //if its connected to the circle currently selected targetCircleCoordinates will be the center of the drawable board.
          targetCircleCoordinates = {
            xCordinate: containerWidth / 2,
            yCordinate: containerHeight / 2
          }

        return <Line
          x1={currentCircleCoordinates.xCordinate}
          y1={currentCircleCoordinates.yCordinate}
          x2={targetCircleCoordinates.xCordinate}
          y2={targetCircleCoordinates.yCordinate}
          stroke={otherCircleLinesColor}
          strokeWidth="1" />
      });
      return linesForCircle;
    });
    return allCircleLines;
  }

  addSelectedCircleLines() {
    const { circleTitles, connections, containerHeight, containerWidth, selectedCircleIndex, selectedCircleLinesColor } = this.props;
    let selectCircleAttachees = connections[selectedCircleIndex] || [];
    let allLinesForCurrentCircle = selectCircleAttachees.map((toCircleIndex, index) => {
      let targetCircleCoordinates = this.findCircleCenterCoords(toCircleIndex);
      return <Line
        x1={containerWidth / 2}
        y1={containerHeight / 2}
        x2={targetCircleCoordinates.xCordinate}
        y2={targetCircleCoordinates.yCordinate}
        stroke={selectedCircleLinesColor}
        strokeWidth="2"
        key={'selected_circle_line' + index} />
    });
    return allLinesForCurrentCircle;
  }

  addCircles() {
    console.log(profiles["user"].imgurl)

    const { circleTitles, connections, centralCircleFillColor, otherCirclesRadius, otherCircleTextColor, otherCircleFillColor, selectedCircleIndex } = this.props;
    let circleElements = circleTitles.map((title, index) => {
      if (index === selectedCircleIndex)
        return null;

      let circleCoOrds = this.findCircleCenterCoords(index);
      let selectCircleAttachees = connections[selectedCircleIndex] || [];
      let circleStrokeColor = otherCircleFillColor;
      if (_.includes(selectCircleAttachees, index))
        circleStrokeColor = centralCircleFillColor
      return (
        <G key={"circle" + index} onPress={this.circleClicked(index)}>
          {/*<Circle cx={circleCoOrds.xCordinate} cy={circleCoOrds.yCordinate} r={otherCirclesRadius} stroke={circleStrokeColor} strokeWidth="2" fill={otherCircleFillColor} /> */}
          { /* <Circle cx={circleCoOrds.xCordinate} cy={circleCoOrds.yCordinate} r={otherCirclesRadius} stroke={circleStrokeColor} strokeWidth="2" fill="none" /> */}
          {/*<Image xlinkHref={profiles[title].imgurl} x={circleCoOrds.xCordinate - otherCirclesRadius} y={circleCoOrds.yCordinate - otherCirclesRadius} height={2 * otherCirclesRadius} width={2 * otherCirclesRadius} />*/}
          <Defs>
              <ClipPath id={"clip" + title}>
                <Circle  cx={circleCoOrds.xCordinate} cy={circleCoOrds.yCordinate} r={otherCirclesRadius} stroke={circleStrokeColor} strokeWidth="2" fill={otherCircleFillColor} />
              </ClipPath>
            </Defs>

            <Image
              x={circleCoOrds.xCordinate-otherCirclesRadius}
              y={circleCoOrds.yCordinate-otherCirclesRadius}
              width={otherCirclesRadius*2}
              height={otherCirclesRadius*2}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              xlinkHref={profiles[title].imgurl}
              clipPath={"url(#clip" + title + ")"}
            />
          <Text x={circleCoOrds.xCordinate - otherCirclesRadius + 15} y={circleCoOrds.yCordinate + otherCirclesRadius + 20} fill={otherCircleTextColor} stroke={otherCircleTextColor}>{title}</Text>
        </G>
      )
    });
    return circleElements;
  }

  render() {
    const { centralCircleRadius, centralCircleStrokeColor, centralCircleFillColor, centralCircleTextColor, containerHeight, containerWidth, circleTitles, selectedCircleIndex } = this.props
    const centralCircleText = circleTitles[selectedCircleIndex];
    return (
      <View style={{ height: containerHeight, width: containerWidth }}>
        <Svg
          height={containerHeight}
          width={containerWidth}>
          {this.addBackgroundLines()}
          {this.addSelectedCircleLines()}
          <G>
            { <Image
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
              source={{ uri: 'https://exploringbits.com/wp-content/uploads/2022/01/cute-pfp-4.jpg?ezimgfmt=rs:352x354/rscb3/ng:webp/ngcb3' }} /> }
            {/*<Circle cx={containerWidth / 2} cy={containerHeight / 2} r={centralCircleRadius} stroke={centralCircleStrokeColor} strokeWidth="4" fill={centralCircleFillColor} style={{ borderWidth: 5 }} textAnchor="middle" />*/}
            {/* <Circle cx={containerWidth / 2} cy={containerHeight / 2} r={centralCircleRadius} stroke={centralCircleStrokeColor} strokeWidth="4" fill="none" style={{ borderWidth: 5 }} textAnchor="middle" />*/ }
            {/*<Image xlinkHref={profiles["user"].imgurl} x={containerWidth / 2 - centralCircleRadius} y={containerHeight / 2 - centralCircleRadius} height={2 * centralCircleRadius} width={2 * centralCircleRadius} />*/}
            <Defs>
              <ClipPath id={"clipMain"}>
                <Circle  cx={containerWidth / 2} cy={containerHeight / 2} r={centralCircleRadius} stroke={centralCircleStrokeColor} strokeWidth="2" fill={centralCircleFillColor} />
              </ClipPath>
            </Defs>

            <Image
              x={(containerWidth / 2) - centralCircleRadius}
              y={(containerHeight / 2) - centralCircleRadius}
              width={centralCircleRadius*2}
              height={centralCircleRadius*2}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              xlinkHref={profiles["CodewordPickle"].imgurl}
              clipPath={"url(#clipMain)"}
            />
            <Text x={containerWidth / 2 - centralCircleRadius + 10} y={containerHeight / 2 + centralCircleRadius + 15} fill={centralCircleTextColor} stroke={centralCircleTextColor}>{profiles["user"].uname}</Text>
          </G>
          {this.addCircles()}
        </Svg>
      </View>
    )
  }
}

NetworkGraph.propTypes = {
  circleTitles: PropTypes.array.isRequired,
  selectedCircleIndex: PropTypes.number.isRequired,
  connections: PropTypes.object.isRequired,
  onCircleClick: PropTypes.func.isRequired,
  containerHeight: PropTypes.number,
  containerWidth: PropTypes.number,
  centralCircleRadius: PropTypes.number,
  otherCirclesRadius: PropTypes.number,
  distanceFromCenter: PropTypes.number,
  selectedCircleLinesColor: PropTypes.string,
  otherCircleLinesColor: PropTypes.string,
  centralCircleStrokeColor: PropTypes.string,
  centralCircleFillColor: PropTypes.string,
  centralCircleTextColor: PropTypes.string,
  otherCircleTextColor: PropTypes.string,
  otherCircleFillColor: PropTypes.string
}

NetworkGraph.defaultProps = {
  containerHeight: 500,
  containerWidth: 500,
  centralCircleRadius: 60,
  otherCirclesRadius: 35,
  distanceFromCenter: 200,
  selectedCircleLinesColor: '#f59f02',
  otherCircleLinesColor: 'black',
  centralCircleStrokeColor: '#24a195',
  centralCircleFillColor: '#18B0A2',
  centralCircleTextColor: 'white',
  otherCircleTextColor: 'white',
  otherCircleFillColor: 'black'
}

export default NetworkGraph;
