import React from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={ styles.view }>
      <Text style={styles.text}>Menu</Text>
      <Button 
        onPress={() => navigation.navigate('Components') }
        title="Go to Components Demo"
      />
      <Separator />
      <Button
        color="#f194ff"
        onPress={() => navigation.navigate('List') }
        title="Go to List Demo"
      />
      <Separator />
      <Button
        color="#f2e64b"
        onPress={() => navigation.navigate('Image') }
        title="Go to Image Demo"
      />
      <Separator />
      <Button
        color="#69d7ac"
        onPress={() => navigation.navigate('Counter') }
        title="Go to Counter Demo"
      />
      <Separator />
      <Button
        color="#ffa500"
        onPress={() => navigation.navigate('Color') }
        title="Go to Color Demo"
      />
      <Separator />
      <Button
        color="#088da5"
        onPress={() => navigation.navigate('Square') }
        title="Go to Square Demo"
      />
      <Separator />
      <Button
        color="#84508d"
        onPress={() => navigation.navigate('Text') }
        title="Go to Text Demo"
      />
    </View>
    );
};

const styles = StyleSheet.create({
  view: {
    margin: 30
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15
  },
  separator: {
    marginVertical: 8
  }
});

export default HomeScreen;
