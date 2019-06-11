import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, ImageBackground,
Linking, ToastAndroid} from 'react-native';
import t from 'tcomb-form-native';
import SendSMS from 'react-native-sms';

const Form = t.form.Form;

export default class FormScreen extends React.Component {
	
	
	
  handleSubmit = () => {
      const value = this._form.getValue();
	  
	  SendSMS.send({
			body: value.tipo + ', ' + value.nombre + ', ' + value.direccion + ', ' + value.telefono,
			recipients: ['2214407957'],
			successTypes: ['sent', 'queued'],
			allowAndroidSendWithoutReadPermission: true
		}, (completed, cancelled, error) => {
	 
		 if(completed){
			 this.props.navigation.navigate('Home')
		 } else {
			 ToastAndroid.show('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error, ToastAndroid.SHORT);
			console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
			 
		 }
			
	 
		});
    }

  render() {
	
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c} // assign a ref
		  type={User} 
		/> 
		<Button
          title="Enviar mensaje"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const User = t.struct({
  tipo: t.String,
  nombre: t.String,
  direccion: t.String,
  telefono: t.maybe(t.String),
  
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});