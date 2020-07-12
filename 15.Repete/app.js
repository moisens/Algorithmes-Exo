function repete(str, num) {
   if(num < 1){
      return str = '';
   }
   return str + repete(str, num-1)
   
}
console.log(repete('abc', 4));


// function repete(str, num) {
//    return num > 0 ? str.repeat(num) : '';
   
// }
// console.log(repete('abc', 4));


// function repete(str, num) {
//    let finRepeat = '';
//    while(num > 0){
//       finRepeat += str;
//       num--;

//    }
//    return finRepeat
   
// }
// console.log(repete('abc', 4));


// ----------------- ÉNONCÉ -----------------

// Repetez la chaine(premier parametre) un certain nombre de fois(second parametre).
// Cette algorithme est relativement facile, c'est pourquoi je vais vous demander de
// trouver au moins trois façon différentes de le réaliser.
// Trouver différentes solutions à un algorithme est un bon moyen de progresser.


// ----------------- CONSEILS -----------------

// Recursion.
// opérateur ternaire.
// While;
