'use strict';

var React = require('react-native');

var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

var Umbrella = React.createClass({
  render: function(){
    var pins = [{
      latitute: 37,
      longitude: -95
    }];
    
    return <MapView 
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}></MapView>
  },
  onRegionChangeComplete: function(region) {
      console.log(region);
  }   
});

var styles = StyleSheet.create ({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('Umbrella', () => Umbrella);