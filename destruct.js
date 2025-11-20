let obj={nb1:5, nb2:25};

function somme(a,b){
    return a+b;
}

function somme1({nb1, nb2}){
    return nb1+nb2;
}

console.log(somme1(obj));
