import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={ styles.view }>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="2" />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="3" />
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="1" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    alignItems: 'center'
  }
});

export default ImageScreen;