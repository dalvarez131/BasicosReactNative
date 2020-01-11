import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ColorCounter = ( { color, onIncrease, onDecrease } ) => {
  return (
    <View style={ styles.view } >
      <Text style={ styles.text }>{color}</Text>
      <View style={ styles.fixToText } >
        <Button 
          color= "#dcedc1" 
          title={`Increase ${color}`} 
          onPress={ () => onIncrease() } />
        <Button 
          color= "#dcedc1" 
          title={`Decrease ${color}`} 
          onPress={ () => onDecrease() } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 20
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default ColorCounter;