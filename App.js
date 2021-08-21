import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AddEntry from './components/AddEntry';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import History from './components/History';

const store = createStore(reducer)

export default function App() {
  return (
    <Provider store = {store}>
      <View style={styles.container}>
        <History />
        {/* <AddEntry/> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
