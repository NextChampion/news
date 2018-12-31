import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Spinkit from 'react-native-spinkit';

export default class Loading extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spinkit />
      </View>
    );
  }
}
