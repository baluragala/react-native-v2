import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlignContent extends Component {
  render() {
    return (
      // Try playing with the flexWrap property 'wrap', 'nowrap', 'wrap-reverse'
      <View style={styles.container}>
        <Text style={styles.headerStyle}>flexWrap: 'wrap'</Text>
        <View style={[{flexDirection: 'column', flexWrap: ' wrap'}, styles.elementsContainer]}>
          <View style={styles.red} />
          <View style={styles.yellow} />
          <View style={styles.green} />
          <View style={styles.blue} />
          <View style={styles.cyan} />
          <View style={styles.purple} />
          <View style={styles.violet} />
        </View>
      </View>
    );
  }
}

const styles = {
  green : {
    backgroundColor: '#32B76C',
    height: 100,
    width: 50,
  },
  yellow : {
    backgroundColor: '#FAA030',
    height: 100,
    width: 50
  },
  red : {
    backgroundColor: '#EE2C38',
    height: 100,
    width: 50
  },
  blue : {
    backgroundColor: '#4196E0',
    height: 100,
    width: 50
  },
  cyan : {
    backgroundColor: '#32BABC',
    height: 100,
    width: 50
  },
  purple : {
    backgroundColor: '#A0138E',
    height: 100,
    width: 50
  },
  violet : {
    backgroundColor: '#733CA6',
    height: 100,
    width: 50
  },
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
}
