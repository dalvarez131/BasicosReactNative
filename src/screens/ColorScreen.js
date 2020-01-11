import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const ColorScreen = () => {
  const [ colors, setColors ] = useState([]);
  return (
    <View style={ styles.view }>
      <Button 
        color="#bbcdee"
        title="Add a color" 
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}/>
      <Separator />
      <FlatList
        keyExtractor={ item => item }
        data={ colors }
        renderItem={({ item }) => {
          return (
            <View style={{ height: 200, width:200, backgroundColor: item, marginLeft: 'auto', marginRight: 'auto' }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  view: {
    margin: 30
  },
  separator: {
    marginVertical: 8
  }
});


export default ColorScreen;