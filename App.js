import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class app extends React.Component
{

   _handleAdminIdSubmit() {
    
      this.props.navigation.navigate('AdminLogin');

  }

   render() {
     return <View> Ankush Rai</View>;
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

