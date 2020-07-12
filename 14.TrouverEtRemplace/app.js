function fonctionParam(arr, func) {
   const sortedArr = arr.sort();
   console.log(sortedArr);

   const newArr = [];
   for(let i=0; i<sortedArr.length; i++){
      if(func(sortedArr[i])){
         newArr.push(sortedArr[i]);
      }
   }
   return newArr;


}

console.log(fonctionParam([1, 7, 2, 3, 90, 4], function(n) {return n >= 3;}));


// ----------------- ÉNONCÉ -----------------

// Cette fonction reçoit deux paramètres, un tableau et une fonction.
// Triez le premier paramètre(arr).
// Puis retournez un nouveau tableau après avoir utilisé la fonction (second param)
// avec chacun des éléments du premier tableau.
// ----------------- CONSEILS -----------------

// shift();
// Boucle for;