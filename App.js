/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {Text, Image, ScrollView, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Ricardo</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={{
          width: largura,
          height: largura,
        }}
      />
      <Text>Marina</Text>
      <Image
        source={require('./res/img/alura.jpg')}
        style={{
          width: largura,
          height: largura,
        }}
      />
    </ScrollView>
  );
};

export default App;
