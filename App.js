import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class app extends React.Component
{

   _handleAdminIdSubmit() {
    
      this.props.navigation.navigate('AdminLogin');

  }

   render() {
    return <Text>Try editing me! 🎉</Text>;
   }
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

