import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const ImageDetail = ({imageSource, score, title}) => {
  return (
    <View style={ styles.view }>
      <Image style={ styles.image } source={imageSource}/>
      <Text style={ styles.text }>{title}</Text>
      <Text style={ styles.text }>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110
  },
  view: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center'
  }
});

export default ImageDetail;