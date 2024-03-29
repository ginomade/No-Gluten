import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,
Linking, ToastAndroid} from 'react-native';

import {onFacebookPress} from './actions.js'

export default class HomeScreen extends React.Component {
  render() {
	const { navigate } = this.props.navigation;
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
		   
		   <TouchableOpacity
			 style={styles.buttonstyle}
			 onPress={() => navigate('Form')}>
			 
				 <Image
					style={styles.buttonIcon}
					source={require('./res/ic_assignment_black.png')}
				  />
				 
				 <Text style={[styles.buttontext]}> Formulario </Text>
			 
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

