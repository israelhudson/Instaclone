/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import {Text, Image, ScrollView, Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get('screen').width;

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>Ricardo</Text>
      <Image source={require('./res/img/alura.jpg')} style={estilo.imagem} />
      <Text>Marina</Text>
      <Image source={require('./res/img/alura.jpg')} style={estilo.imagem} />
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
});

export default App;
