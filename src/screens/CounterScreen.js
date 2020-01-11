import React, { useReducer} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload:  }

  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
        return {...state, count: state.count - action.payload};
    default:
      return state;
  }

};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 } )

  return (
    <View style={ styles.view } >
      <Text style={ styles.text }>Counter</Text>
      <View style={ styles.fixToText }>
        <Button color="#a5c33c" title="Increase" onPress={() => {
          dispatch({type: 'increment', payload: 1})
        }} />
        <Button color="#ff6652" title="Decrease" onPress={() => {
          dispatch({type: 'decrement', payload: 1})
        }}  />
      </View>
      <Text style={ styles.text }>{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 30
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 40
  }
});


export default CounterScreen;