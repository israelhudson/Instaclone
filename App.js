/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, useEffect, useState} from 'react';
import {ScrollView, FlatList} from 'react-native';
import {Cabecalho} from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    const lerFotos = async () => {
      const fotosHttp = await fetch('http://10.0.2.2:3030/feed');
      const fotosJson = await fotosHttp.json();
      setFotos(fotosJson);
    };

    lerFotos();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} />
            <Foto />
          </Fragment>
        )}
      />
    </ScrollView>
  );
};

export default App;
