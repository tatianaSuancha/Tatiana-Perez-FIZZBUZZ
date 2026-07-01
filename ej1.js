//primer ejecicio
for (let numero = 1; numero <= 100; numero++) {
    if ((numero%3 === 0) && (numero%5 === 0) && (numero > 5) ) {
        console.log ("este numero es divisble entre 15" + numero)
    }
    else if ( numero%3 === 0){
        console.log ("este numero es divisble entre 3 " + numero)
    }
    else if  ( numero%5 === 0){
        console.log ("este numero es divisble entre 5 " + numero)
    }else {
        console.log ("este numero no es divisible " + numero)
    }

}
console.log(10%3)