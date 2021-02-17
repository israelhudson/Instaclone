import React, {Fragment} from 'react';
import {Image, Text} from 'react-native';
import estilo from './estilo';

const Foto = ({urlFoto, descricao}) => {
  return (
    <Fragment>
      <Image source={{uri: urlFoto}} style={estilo.imagem} />
      <Text>{descricao}</Text>
      <Image source={pegarImaLike(0)} 
      style={estilo.like}
      />
    </Fragment>
  );
};

const pegarImaLike = (quantidade) => {
  if(quantidade > 0){
    return require('../../../res/img/s2-checked.png')
  }else{
    return require('../../../res/img/s2.png')
  }
}

export default Foto;
