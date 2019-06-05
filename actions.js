import {Linking} from 'react-native';

export const onFacebookPress = () => {
	faceUrl = 'https://www.facebook.com';
    Linking.canOpenURL(faceUrl).then(supported => {
      if (supported) {
        Linking.openURL(faceUrl);
      } else {
        ToastAndroid.show('Error al cargar face !', ToastAndroid.SHORT);
      }
    });
  }
  
 