/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {Text, Image, ScrollView} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Ricardo</Text>
      <Image source={require('./res/img/alura.jpg')} />
      <Text>Marina</Text>
      <Image source={require('./res/img/alura.jpg')} />
    </ScrollView>
  );
};

export default App;
