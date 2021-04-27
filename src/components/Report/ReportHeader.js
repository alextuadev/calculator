import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../../res/colors'

const ReportHeader = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.buttonBack} >
        <Image style={{ width: 30, height: 30, marginLeft: 5 }}
          source={require('../../assets/img/left-arrow.png')} />
      </View>
      
      <View style={styles.imageLogo} >
        <Image style={styles.logo} source={require('../../assets/img/logo.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonBack: {
    position: 'absolute',
    zIndex: 9,
    left: 0,
  },
  imageLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }

});
export default ReportHeader