import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
class Summary extends React.Component {

  render() {
    return (
      <Text style = {styles.text}> All attendance has been recorded </Text>      
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default Summary;