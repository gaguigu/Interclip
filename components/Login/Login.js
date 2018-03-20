import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>
                    Alerta de Notícias
                </Text>
                <Image 
                    style={styles.logo}
                    source={require('../../images/logoInterclip.png')} 
                />                
            </View>
            <View style={styles.formContainer}>            
                <LoginForm 
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc3c7'
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },

  formContainer: {

  },
  
  logo: {
      width: 200,
      height: 78
  },
  
  title: {
      color: '#2980b9',
      marginBottom: 1,
      width: 300,
      textAlign: 'center',
      fontSize: 25
      //opacity: 0.5
  }
});