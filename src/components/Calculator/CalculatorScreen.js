import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../../res/colors'
import InputButton from './InputButton';

const buttons = [
  ['C', 'clear', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', "-"],
  ['1', '2', '3', "+"],
  ['%', "0", ".", "="]
];


class CalculatorScreen extends Component {
  state = {
    displayValue: '0',
    operator: null,
    firstValue: '',
    secondValue: '',
    nextValue: false
  }

  handleInput = (input) => {
    const { displayValue, operator, firstValue, secondValue, nextValue } = this.state
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: displayValue === "0" ? input : displayValue + input
        })

        if (!nextValue) {
          this.setState({
            firstValue: firstValue + input
          })
        } else {
          this.setState({
            secondValue: secondValue + input
          })

        }
        break;
      case '+':
      case '-':
      case 'X':
      case '/':
        this.setState({
          operator: input,
          displayValue: (operator !== null ? displayValue.substr(0, displayValue.length - 1) : displayValue) + input,
          nextValue: true
        })
        break;
      case '=':
        let formatOperator = (operator == 'X') ? '*' : operator
        let result = eval(firstValue + formatOperator + secondValue)
        this.setState({
          displayValue: result % 1 === 0 ? result : result.toFixed(2),
          firstValue: result % 1 === 0 ? result : result.toFixed(2),
          secondValue: '',
          operator: null,
          nextValue: false,
        })
        break;
      case 'clear':
      case 'C':
        this.setState({
          operator: null,
          displayValue: '0',
          firstValue: '',
          secondValue: ''
        })
        break;
      case 'DEL':
        let string = displayValue.toString();
        let length = string.length
        this.setState({
          displayValue: length == 1 ? "0" : displayValue.slice(0, -1),
          firstValue: length == 1 ? "" : displayValue.slice(0, -1),
        })
        break;
      case '.':
        let dot = displayValue.toString().slice(-1)
        this.setState({
          displayValue: dot !== "." ? displayValue + input : displayValue,
        })
        break;
    }
  }

  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputButton
          value={buttonItems}
          handleOnPress={this.handleInput.bind(this, buttonItems)}
          key={'btn-' + buttonIndex} />
      });
      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    });

    return layouts
  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{this.state.displayValue}</Text>
        </View>

        <View style={styles.padContainer}>
          {this.renderButtons()}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  padContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  },

  resultContainer: {
    flex: 0.3,
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  },

  resultText: {
    color: 'white',
    fontSize: 75,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  }

});

export default CalculatorScreen;