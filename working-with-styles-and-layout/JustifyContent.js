import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class JustifyContent extends Component {
  render() {
    return (
      // Try setting `justifyContent` to 'flex-start'/'flex-end'/'center'/'space-between'/'space-around'
      <View style={styles.container}>
        <Text style={styles.headerStyle}>justifyContent: 'flex-start'</Text>
        <View style={[{justifyContent: 'flex-start'}, styles.elementsContainer]}>
          <View style={{width: 50, height: 50, backgroundColor: '#EE2C38'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#FAA030'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#32B76C'}} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '100',
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