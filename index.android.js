import React, {Component, UIManager} from 'react';
import {AppRegistry, StyleSheet, View, Dimensions, NativeModules} from 'react-native';
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
const bands = [
  'Color natural',
  'Análisis de vegetación',
  'Color infrarrojo (vegetación)',
  'Natural con remoción atmosférica',
  'Vegetación saludable',
  'Infrarrojo de onda corta',
  'Tierra/agua',
  'Falso color (urbano)',
  'Agricultura',
  'Penetración atmosférica'
]

const base = require('./assets/base_dark.png');

const _2013_432 = require('./assets/2013110LGN01/432.jpg');
const _2013_654 = require('./assets/2013110LGN01/654.jpg');
const _2013_543 = require('./assets/2013110LGN01/543.jpg');
const _2013_753 = require('./assets/2013110LGN01/753.jpg');
const _2013_562 = require('./assets/2013110LGN01/562.jpg');
const _2013_754 = require('./assets/2013110LGN01/754.jpg');
const _2013_564 = require('./assets/2013110LGN01/564.jpg');
const _2013_764 = require('./assets/2013110LGN01/764.jpg');
const _2013_652 = require('./assets/2013110LGN01/652.jpg');
const _2013_765 = require('./assets/2013110LGN01/765.jpg');

const _2014_432 = require('./assets/2014225LGN00/432.jpg');
const _2014_654 = require('./assets/2014225LGN00/654.jpg');
const _2014_543 = require('./assets/2014225LGN00/543.jpg');
const _2014_753 = require('./assets/2014225LGN00/753.jpg');
const _2014_562 = require('./assets/2014225LGN00/562.jpg');
const _2014_754 = require('./assets/2014225LGN00/754.jpg');
const _2014_564 = require('./assets/2014225LGN00/564.jpg');
const _2014_764 = require('./assets/2014225LGN00/764.jpg');
const _2014_652 = require('./assets/2014225LGN00/652.jpg');
const _2014_765 = require('./assets/2014225LGN00/765.jpg');

const _2015_432 = require('./assets/2015148LGN00/432.jpg');
const _2015_654 = require('./assets/2015148LGN00/654.jpg');
const _2015_543 = require('./assets/2015148LGN00/543.jpg');
const _2015_753 = require('./assets/2015148LGN00/753.jpg');
const _2015_562 = require('./assets/2015148LGN00/562.jpg');
const _2015_754 = require('./assets/2015148LGN00/754.jpg');
const _2015_564 = require('./assets/2015148LGN00/564.jpg');
const _2015_764 = require('./assets/2015148LGN00/764.jpg');
const _2015_652 = require('./assets/2015148LGN00/652.jpg');
const _2015_765 = require('./assets/2015148LGN00/765.jpg');

const _2016_432 = require('./assets/2016055LGN00/432.jpg');
const _2016_654 = require('./assets/2016055LGN00/654.jpg');
const _2016_543 = require('./assets/2016055LGN00/543.jpg');
const _2016_753 = require('./assets/2016055LGN00/753.jpg');
const _2016_562 = require('./assets/2016055LGN00/562.jpg');
const _2016_754 = require('./assets/2016055LGN00/754.jpg');
const _2016_564 = require('./assets/2016055LGN00/564.jpg');
const _2016_764 = require('./assets/2016055LGN00/764.jpg');
const _2016_652 = require('./assets/2016055LGN00/652.jpg');
const _2016_765 = require('./assets/2016055LGN00/765.jpg');

const images = [
  [
    _2013_432,
    _2013_654,
    _2013_543,
    _2013_753,
    _2013_562,
    _2013_754,
    _2013_564,
    _2013_764,
    _2013_652,
    _2013_765
  ],
  [
    _2014_432,
    _2014_654,
    _2014_543,
    _2014_753,
    _2014_562,
    _2014_754,
    _2014_564,
    _2014_764,
    _2014_652,
    _2014_765
  ],
  [
    _2015_432,
    _2015_654,
    _2015_543,
    _2015_753,
    _2015_562,
    _2015_754,
    _2015_564,
    _2015_764,
    _2015_652,
    _2015_765
  ],
  [
    _2016_432,
    _2016_654,
    _2016_543,
    _2016_753,
    _2016_562,
    _2016_754,
    _2016_564,
    _2016_764,
    _2016_652,
    _2016_765
  ]
];

class satellogicMobileDemo extends Component {
  constructor() {
    super();

    this.image = _2016_652;
    this.currentImage = 2;
    this.currentYear = 1;

    this.state = {
      image: _2016_652,
      base: base,
      minZoom: 1,
      maxZoom: 4
    };
  }

  onYearSelect(index) {
    this.setState({image: images[index][this.currentImage]});
    this.currentYear = index;
  }

  onCodeSelect(index) {
    this.setState({image: images[this.currentYear][index]});
    this.currentImage = index;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapcontainer} pointerEvents="box-only">
          <PhotoView
            source={this.state.image}
            minimumZoomScale={this.state.minZoom}
            maximumZoomScale={this.state.maxZoom}
            fadeDuration={0}
            shouldNotifyLoadEvents={false}
            style={styles.base}/>
          <PhotoView
            source={this.state.base}
            minimumZoomScale={this.state.minZoom}
            maximumZoomScale={this.state.maxZoom}
            fadeDuration={0}
            shouldNotifyLoadEvents={false}
            style={styles.overlay}/>
        </View>
        <Grid>
          <Col style={{ width: 90 }}>
            <Picker
              style={styles.years}
              selectedValue={1}
              onValueChange={(index) => this.onYearSelect(index)}
              itemStyle={{
              color: "#cccccc",
              fontSize: 26
            }}>
              {years.map((value, i) => (<PickerItem label={value} value={i} key={"year" + value}/>))}
            </Picker>
          </Col>
          <Col>
            <Picker
              style={styles.codes}
              selectedValue={2}
              onValueChange={(index) => this.onCodeSelect(index)}
              itemStyle={{
              color: "#aaaaaa",
              fontSize: 16
            }}>
              {bands.map((value, i) => (<PickerItem label={value} value={i} key={"code" + value}/>))}
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
    height: mapHeight,
    position: 'absolute',
    top: 0,
    left: 0
  },
  overlay: {
    width: width,
    height: mapHeight,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.8
  },
  container: {
    height: height,
    backgroundColor: '#141414'
  },
  years: {
    width: width / 4,
    height: 200
  },
  codes: {
    width: (width / 4) * 3,
    height: 200
  }
});

AppRegistry.registerComponent('satellogicMobileDemo', () => satellogicMobileDemo);
