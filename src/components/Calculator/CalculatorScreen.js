import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../../res/colors'

class CalculatorScreen extends Component {
  state = {
  }

  componentDidMount = async () => {
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Calculator</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue
  },
  btn: {
    padding: 8,
    backgroundColor: Colors.green,

    margin: 16
  },
  btnText: {
    color: 'white'
  },
  loader: {
    marginTop: 16
  }
});

export default CalculatorScreen;