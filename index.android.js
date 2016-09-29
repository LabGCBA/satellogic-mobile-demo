import React, {Component, UIManager} from 'react';
import {AppRegistry, StyleSheet, View, Dimensions} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import PhotoView from 'react-native-photo-view';
import Picker from 'react-native-wheel-picker';

var PickerItem = Picker.Item;

const width = Dimensions
  .get('window')
  .width; //full width
const height = Dimensions
  .get('window')
  .height; //full height
const mapHeight = 394;
const imageFolders = [
  '2013110LGN01',
  '2014001LGN00',
  '2014289LGN00',
  '2015180LGN00',
  '2016071LGN00',
  '2013126LGN01',
  '2014017LGN00',
  '2014305LGN00',
  '2015196LGN00',
  '2016087LGN00',
  '2013142LGN01',
  '2014033LGN00',
  '2014321LGN00',
  '2015212LGN00',
  '2016103LGN00',
  '2013158LGN00',
  '2014049LGN00',
  '2014337LGN00',
  '2015228LGN00',
  '2016119LGN00',
  '2013174LGN00',
  '2014065LGN00',
  '2014353LGN00',
  '2015244LGN00',
  '2016135LGN00',
  '2013190LGN00',
  '2014081LGN00',
  '2015004LGN00',
  '2015260LGN00',
  '2016151LGN00',
  '2013206LGN00',
  '2014113LGN00',
  '2015020LGN00',
  '2015276LGN00',
  '2016167LGN00',
  '2013222LGN00',
  '2014129LGN00',
  '2015036LGN00',
  '2015292LGN00',
  '2016183LGN00',
  '2013238LGN00',
  '2014145LGN00',
  '2015052LGN00',
  '2015308LGN00',
  '2016199LGN00',
  '2013254LGN00',
  '2014161LGN00',
  '2015068LGN00',
  '2015324LGN00',
  '2016215LGN00',
  '2013270LGN00',
  '2014177LGN00',
  '2015084LGN00',
  '2015340LGN00',
  '2016231LGN00',
  '2013286LGN00',
  '2014193LGN00',
  '2015100LGN00',
  '2015356LGN00',
  '2016247LGN00',
  '2013302LGN00',
  '2014209LGN00',
  '2015116LGN00',
  '2016007LGN00',
  '2013318LGN00',
  '2014225LGN00',
  '2015132LGN00',
  '2016023LGN00',
  '2013334LGN00',
  '2014241LGN00',
  '2015148LGN00',
  '2015148LGN00',
  '2013350LGN00',
  '2014273LGN00',
  '2015164LGN00',
  '2016055LGN00'
];
const pickedImageFolders = ['2013110LGN01', '2014225LGN00', '2015148LGN00', '2016055LGN00'];
const imageFiles = [
  '432.jpg',
  '654.jpg',
  '543.jpg',
  '753.jpg',
  '562.jpg',
  '754.jpg',
  '564.jpg',
  '764.jpg',
  '652.jpg',
  '765.jpg'
];
const years = ['2013', '2014', '2015', '2016'];
const imageCodes = [
  '432',
  '654',
  '543',
  '753',
  '562',
  '754',
  '564',
  '764',
  '652',
  '765'
];

class satellogicMobileDemo extends Component {
  constructor() {
    super();

    this.state = {
      itemList: years
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapcontainer} pointerEvents="box-only">
          <PhotoView
            source={require('./assets/2016247LGN00/754.jpg')}
            minimumZoomScale={1}
            maximumZoomScale={2}
            androidScaleType="fitStart"
            style={styles.base}/>
          <PhotoView
            source={require('./assets/base_dark.png')}
            pointerEvents='box-none'
            minimumZoomScale={1}
            maximumZoomScale={2}
            androidScaleType="fitStart"
            style={styles.overlay}/>
        </View>
        <Grid>
          <Col>
            <Picker
              style={styles.wheelview}
              selectedValue={2}
              itemStyle={{
              color: "#cccccc",
              fontSize: 26
            }}
              onValueChange={(index) => console.log(index)}>
              {years.map((value, i) => (<PickerItem label={value} value={i} key={"year" + value}/>))}
            </Picker>
          </Col>
          <Col>
            <Picker
              style={styles.wheelview}
              selectedValue={2}
              itemStyle={{
              color: "#aaaaaa",
              fontSize: 26
            }}
              onValueChange={(index) => console.log(index)}>
              {imageCodes.map((value, i) => (<PickerItem label={value} value={i} key={"code" + value}/>))}
            </Picker>
          </Col>
        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapcontainer: {
    height: mapHeight,
    backgroundColor: '#141414'
  },
  base: {
    width: width,
    height: mapHeight
  },
  overlay: {
    width: width,
    height: mapHeight,
    position: 'absolute',
    top: 0,
    opacity: 0.80
  },
  container: {
    height: height,
    backgroundColor: '#141414'
  },
  wheelview: {
    width: width / 2,
    height: 200
  }
});

AppRegistry.registerComponent('satellogicMobileDemo', () => satellogicMobileDemo);
