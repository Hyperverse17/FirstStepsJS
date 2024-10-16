
// Cómo crear un array ?

// 1. con new Array() o sólo usando Array()

const fruits = Array('apple', 'banana', 'orange', 'grape', 'pear', 'berry')
console.log(fruits)

// Hay que tener en cuenta que de esta forma no es posible crera arrays de un solo elemento
const justOneNumber = Array(12) // Regresa un error
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5) // Esta forma permite crear arrays de n elementos (n>1)
console.log(number)

// Cómo acceder a los elementos de un array?

const firstFruit = fruits[0] // Los elementos se llaman colocando la posición deseada directamente entre corchetes, el primer elemento se identifica con el cero
console.log(firstFruit)
const thirdFruit = fruits[2] // Los elementos se llaman colocando la posición deseada directamente entre corchetes, el primer elemento se identifica con el cero
console.log(thirdFruit)

// length property

const numberOfFruits = fruits.length // La función lenght permite saber el número de elementos de un array
console.log(numberOfFruits)

// 2. Usando lo que se conoce como literal syntax: Escribiendo el o los elementos de nuestro array directamente entre corchetes

const oneNumber = [4] // De esta forma sí es posible crera arrays de un solo elemento
console.log(oneNumber)

const emptyArray = [] // Así como crear arrays nulos/vacios
console.log(emptyArray)

// Es posible hacer arrays mixtos, es decir, con distintos tipos de elementos
const recipeeIngredients = [
  'Flour', // String
  true, // booleano
  2, // Entero
  {
    ingredient: 'Milk', quantity: '1 cup' // Objeto
  },
  false // booleanpo
]
console.log(recipeeIngredients)

console.log('----- Clase 2 -----')
// Mutability (Transformar el array)

fruits.push('watermelon') // el método .push agrega elementos
console.log(fruits)

// Immutability (crear nuevos arrays a partir de existemtes)

const newFruits = fruits.concat(['grape', 'kiwi']) // crea el nuevo array newFruits a partir de fruits y concatenando grape y kiwi; el método .concat no modifica el array al que se aplica.
console.log(fruits)
console.log(newFruits)

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits) // el método isArray verifica si algún elemento es un arreglo, retorna un booleano
console.log(isArray)

// Practical exercise: sum all elements of an array.

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i]
}

console.log(sum)

// Truco matemático: La suma de los primeros n números naturales es n(n+1)/2

let sum2 = numbersArray.length * (numbersArray.length + 1)/2

console.log(sum2)


