import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet, Image, TextInput } from 'react-native';

import Colors from '../../res/colors'

class LoginScreen extends Component {
  state = {
  }

  componentDidMount = async () => {
  }

  handleInput() {
  }

  login() {
    this.props.navigation.navigate('Report')
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.containerBlue}>
          <Image style={styles.iconLogin} source={require('../../assets/img/iconLogin.png')} />
        </View>

        <View style={styles.containerForm}>
          <Image style={styles.logo} source={require('../../assets/img/logo.png')} />

          <TextInput style={styles.input}
            ref="email"
            autoCapitalize="none"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            placeholderTextColor={Colors.textGray}
            returnKeyType="next"
            placeholder='User'
            onChangeText={(value) => this.handleInput({ email: value })}
          />

          <TextInput style={styles.input}
            ref="password"
            autoCapitalize="none"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            placeholderTextColor={Colors.textGray}
            returnKeyType="next"
            placeholder='Password'
            secureTextEntry
            onChangeText={(value) => this.handleInput({ password: value })}
          />


          <Pressable
            style={styles.btn}
            onPress={() => this.login()}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>

        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBlue: {
    flexDirection: 'column',
    flex: 0.6,
    width: '100%',
    height: '70%',
    position: 'absolute',
    top: 0, right: 0,
    bottom: 0,
    flex: 0.6,
    backgroundColor: Colors.blue
  },
  containerForm: {
    marginTop: 120,
    width: "90%",
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 70,
    backgroundColor: "#fff",
    elevation: 2,
    shadowOpacity: 0.75,
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    minHeight: 450,
  },
  btn: {
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.green,
    margin: 16,
    width: 220
  },
  btnText: {
    color: 'white'
  },
  iconLogin: {
    alignSelf: 'center',
    marginTop: 70,
    width: 90,
    height: 90,
  },
  input: {
    width: 220,
    borderColor: Colors.gray,
    borderWidth: 1,
    color: '#3B3B3B',
    height: 36,
    alignItems: 'center',
    paddingBottom: 9,
    marginBottom: 15,
    paddingLeft: 16,
    paddingRight: 10,
    fontSize: 16,
  },
  logo: {
    marginBottom: 60
  }
})
export default LoginScreen;