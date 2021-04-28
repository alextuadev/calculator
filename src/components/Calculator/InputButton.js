
import React, { Component } from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../../res/colors';

const buttonsGreen = ['C', 'clear', '%', '/', 'X', '-', '+', '%', '='];

export default class InputButton extends Component {
  render() {
    const { value, handleOnPress } = this.props

    return (
      <Pressable
        style={styles.container}
        onPress={() => handleOnPress(value)}>
        <Text
          style={(buttonsGreen.includes(value) ? styles.textGreen : styles.text)}>{value}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.textCalculator,
    fontSize: 28,
  },
  textGreen: {
    color: Colors.green,
    fontSize: 28,
  }
});