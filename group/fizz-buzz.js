'use strict'

/*
 * Create function `fizzBuzz` that print numbers from 1 to 100
 * But for multiples of three, print "Fizz” instead of the number
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * use console.log to print
 *
 * Français:
 * Créer la fonction `FizzBuzz` qui affiche les nombres de 1 à 100
 * Mais pour les multiples de trois, affiche "Fizz" à la place du nombre
 * et pour les multiples de cinq, affiche "Buzz".
 * Pour les nombres qui sont des multiples de trois et de cinq, affiche "FizzBuzz".
 *
 * Utilisez console.log pour afficher.
 */


// You must write your own tests
<<<<<<< HEAD
throw Error('No tests !')
=======
const fizzBuzz = tab =>{
    let count = 0
    while( count < 100 ){
        if( tab[count] % 3 == 0){
            return 'fizz'
        }
        else if ( tab[count] % 5 == 0){
            return 'buzz'
        }
        else if((tab[count] % 3 == 0) && (tab[count] % 5 == 0)){
            return 'fizzBuzz'
        }
        else{
            return tab[i]
        }
         count++
    }
}
console.log(fizzBuzz([ 15]))
//throw Error('No tests !')
 
>>>>>>> a581b18dc1f038ad7273538b8dddbb4e0cc6eef6
