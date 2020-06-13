function cresceu(ciclo) {
    let arvore = 1;

    for(let i = 0; i<= ciclo; i++) {
        if(i%2 != 0){
            arvore = arvore* 2;
        }
        if(i%2 == 0 && i !=0 ) {
            arvore++;
        }
    }

    return arvore;
}

console.log(cresceu(3));