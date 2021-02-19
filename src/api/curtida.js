const imgLike = (curtiu) => {
    if(curtiu){
        return require('../../res/img/s2-checked.png')
    }else{
        return require('../../res/img/s2.png')
    }
}

const curtirFoto = (curtiu, likes)=> {
    let qdt = likes;
    if(curtiu){
        qdt--;
    }else{
        qdt++;
    }

    return [!curtiu, qdt];
}

export {imgLike, curtirFoto}
