//function suma (a, b){
 //   return a +b;
//}

/*const suma1 = (a,b) =>{
    console.log(a,b);
    return a + b
}
const suma = (a,b) => a + b

const resultado=suma(1,2);

console.log(resultado);*/

/*function sinPromesa() {
    return Promise.resolve(1)
    .then(x => x + 1)
    .then(x => x + 1)
    .then(console.log)
}*/

//sinPromesa()

async function conPromesa(){
    const resultado = await Promise.resolve(1)
    console.log(resultado + 1 + 2);
}

conPromesa()