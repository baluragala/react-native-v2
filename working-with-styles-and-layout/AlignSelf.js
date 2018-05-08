import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlignSelf extends Component {
  render() {
    return (
      // Try playing with the red square alignSelf with 'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
      <View style={styles.container}>
        <Text style={styles.headerStyle}>alignSelf: 'stretch'</Text>
        <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.elementsContainer]}>
          <View style={[{alignSelf: 'stretch'} ,styles.red]} />
          <View style={styles.yellow} />
          <View style={styles.green} />
        </View>
      </View>
    );
  }
}

const styles = {
  green : {
    backgroundColor: '#32B76C',
    height: 50,
    width: 60,
  },
  yellow : {
    backgroundColor: '#FAA030',
    height: 50,
    width: 100
  },
  red : {
    backgroundColor: '#EE2C38',
    height: 50,
    width: 80
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
