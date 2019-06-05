/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,
Linking, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {onFacebookPress} from './actions.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
	<ImageBackground source={require('./res/back_restaurant.jpg')} style={{width: '100%', height: '100%'}}>
			
		  <View style={styles.container}>
			
			<TouchableOpacity
			 style={styles.buttonstyle}
			 onPress={onFacebookPress}>
			 
				 <Image
					style={styles.buttonIcon}
					source={require('./res/icons8-facebook-old-48.png')}
				  />
				 
				 <Text style={[styles.buttontext]}> Facebook </Text>
			 
		   </TouchableOpacity>
		   
		   <TouchableOpacity
			 style={styles.buttonstyle}
			 onPress={onFacebookPress}>
			 
				 <Image
					style={styles.buttonIcon}
					source={require('./res/icons8-instagram-48.png')}
				  />
				 
				 <Text style={[styles.buttontext]}> Instagram </Text>
			 
		   </TouchableOpacity>
			
		  </View>
	</ImageBackground>
    );
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
	justifyContent:'center',
	marginTop: 180,
  },
  buttontext: {
    textAlign: 'center',
	fontSize: 18,
    color: '#ffffff',
	padding: 10,
  },
  buttonIcon: {
	padding: 15,
	height: 35,
	width: 35,
	tintColor: '#ffffff',
	marginLeft: 10,
  },
  buttonstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4444ff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 200,
    borderRadius: 5,
    margin: 5,
  },
});
