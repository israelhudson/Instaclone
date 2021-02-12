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
      <Image
        source={require('./res/img/alura.jpg')}
        style={{
          width: 300,
          height: 300,
        }}
      />
      <Text>Marina</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </ScrollView>
  );
};

export default App;
