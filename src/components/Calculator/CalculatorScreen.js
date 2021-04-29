import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../res/colors'
import InputButton from './InputButton';
import * as actions from "../../actions/reports";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


const buttons = [
  ['C', 'clear', '%', '/'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', "-"],
  ['1', '2', '3', "+"],
  ['%', "0", ".", "="]
];


class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
      operator: null,
      firstValue: '',
      secondValue: '',
      nextValue: false
    }
  }

  determineOperation(ope) {
    let nOpe;
    switch (ope) {
      case '+':
        nOpe = "Addition";
        break;
      case '-':
        nOpe = "Sustraction"
        break
      case '*':
        nOpe = "Multiplication"
        break
      case '/':
        nOpe = "Divition";
        break
    }
    return nOpe

  }


  handleInput = (input) => {

    console.log(this.props)
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
        console.log("displayValue", displayValue)
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
        let dValue = result % 1 === 0 ? result : result.toFixed(2);
        let ftValue = result % 1 === 0 ? result : result.toFixed(2);

        let operationString = `${this.determineOperation(formatOperator)} ${firstValue} ${formatOperator} ${secondValue} = ${dValue}`;
        this.setState({
          displayValue: dValue,
          firstValue: ftValue,
          secondValue: '',
          operator: null,
          nextValue: false,
        });

        this.props.actions.saveReportOperation(operationString);
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

function mapStateToProps(state) {
  return {
    reports: state.reports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorScreen);

