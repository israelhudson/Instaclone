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
import {Comentarios} from './src/Components/Comentarios';
import lerFotos from './src/api/feed';

const App = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos(setFotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlImagem={item.userURL} />
            <Foto
                urlFoto={item.url}
                descricao={item.description}
                qntLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>
        )}
      />
    </ScrollView>
  );
};

export default App;
