function additionner(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;

  for(let i=min; i<=max; i++){
     sum += i;

  }
  return sum
   

}

console.log(additionner([1, 4]));
// 1+2+3+4 = 10

// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs.

// ----------------- CONSEILS -----------------

// Boucle "for".
// Math.max
// Math.min