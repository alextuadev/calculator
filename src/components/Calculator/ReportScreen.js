import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import Colors from '../../res/colors'
import { FlatList } from 'react-native-gesture-handler';
import ReportItem from './ReportItem';
import * as actions from "../../actions/reports";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


class ReportScreen extends Component {
  state = {
  }

  componentDidMount = async () => {
    console.log(this.props)
  }

  calculator() {
    this.props.navigation.navigate('Calculator')
  }

  render() {
    const { reports } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.actionTitle}>
          <Text style={styles.textTitle}>Report</Text>
          <Pressable
            style={styles.btn}
            onPress={() => this.calculator()}>
            <Image style={styles.calculatorIcon} source={require('../../assets/img/calculator.png')} />
            <Text style={styles.btnText}>Calculator</Text>
          </Pressable>
        </View>

        <FlatList
          keyExtractor={(item, index) => index}
          data={reports.list}
          renderItem={ReportItem}
        />
      </View>
    );
  }
}


function mapStateToProps(state) {
  console.log("STATE TO PROS", state)
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
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  actionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  textTitle: {
    color: Colors.blue,
    fontSize: 30,
    fontWeight: "900"
  },
  btn: {
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5

  },
  btnText: {
    color: "#fff"
  },
  calculatorIcon: {
    width: 30,
    height: 30
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportScreen);