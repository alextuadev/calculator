import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../../res/colors'

const ReportItem = ({ item, index }) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerNumber}>
        <Text style={styles.number}>{index + 1}</Text>
      </View>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 0,
    marginBottom: 20,
    borderColor: Colors.gray,
    alignItems: 'center',
    borderWidth: 1
  },
  number: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900"
  },
  containerNumber: {
    backgroundColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: Colors.green,
    borderWidth: 1
  },
  text: {
    color: Colors.textGray,
    paddingLeft: 16
  }

});
export default ReportItem