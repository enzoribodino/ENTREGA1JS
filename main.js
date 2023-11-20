//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
 


const ejercicioUno = (numero) => {

    if(numero % 2 == 0){
        return `el numero ${numero} es par`
    }
    else{
        return 'el numero es impar'
    }
    
}
console.log(ejercicioUno(21))

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const ejercicioDos = (numeroX, numeroY) => {
    if (numeroX> numeroY){
        return  `el numero ${numeroX} es mayor que ${numeroY}`
    }

    else if (numeroX < numeroY){
        return `el numero ${numeroX} es menor que ${numeroY} `
    }

    else if (numeroX=== numeroY){
        return 'son iguales'
    }

}

console.log(ejercicioDos (5,4))

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const ejercicioTres = (numero) => {
    if (numero % 5 == 0){
        return `el numero ${numero} es multiplo de 5`
    }

    else   {
        return 'este numero no es multiplo de 5, prueba con otro'
    }

}
console.log(ejercicioTres(7))


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const  ejercicioCuatro = (numero) =>{


for (let i =0; i <= numero; i++){
    console.log(i);
}

}

console.log(ejercicioCuatro(8))

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.





// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const ejercicioSeis = (array) => {
    for (let i = 0; i <= array.length; i++){
        console.log(array)
    }
}

console.log(ejercicioSeis([1,false,10,'Argentina',2022]))

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const ejercicioSiete =(array) => {
    for (let i = 0; i <= array.length; i ++){
        if (i=== 4){
            continue;
        }
        console.log(array[i])
    }
}
console.log(ejercicioSiete([1,2,3,4,5,6,7,8,9,10]))

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const ejercicioOcho =(array,number) => {
    for (let i =0; i < array.length; i++){
        const resultado =array[i]* number
        console.log(resultado)

    }
}

console.log(ejercicioOcho([3,4,6], 2))