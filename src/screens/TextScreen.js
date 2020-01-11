import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View style={ styles.view } >
      <Text>Enter Password: </Text>
      <TextInput 
        style= { styles.input }
        secureTextEntry={true}
        autoCapitalize = "none"
        autoCorrect = { false }
        value={password}
        onChangeText= {(newpassword) => setPassword(newpassword)}
      />
      { password.length < 5 ? <Text>Password must be longer than 5 characters</Text> :  null }
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 30
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;