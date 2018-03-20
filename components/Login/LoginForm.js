import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (      
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder='Chave de acesso'
                placeholderTextColor= '#2980b9'
            />
            <TextInput style={styles.input}
                placeholder='Informe a data'
                placeholderTextColor= '#2980b9'
            />            
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Ver notícias
                </Text>                
            </TouchableOpacity>
        </View>     
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },

     input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color: '#000000',
        paddingHorizontal: 10
     },
     
     buttonContainer: {
        backgroundColor: '#2980b9',
        paddingHorizontal: 10 
     },

     buttonText: {
        textAlign: 'center',        
        color: '#FFFFFF',
        fontWeight: '700',
        height: 40     
     }
});