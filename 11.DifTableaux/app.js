//With concat & filter
// function difTab(arr1, arr2) {
//    let arr3 = arr1.concat(arr2);
//    console.log(arr3);
//    let diff =  arr3.filter((arr) =>{
//       if(arr >= 4 && arr < 5){
//          return arr
//       }
//    })
//    return diff;
   
// }

// console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));


//With a function in a function + cond
function difTab(arr1, arr2) {
   const recupArr = [];

   function checkDiff(array1, array2){
      for(let i=0; i<array1.length; i++){
         if(array2.indexOf(array1[i]) === -1){
            recupArr.push(array1[i]);
         }
      }
      
   }
   checkDiff(arr1, arr2);
   checkDiff(arr2, arr1);
   return recupArr;
}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();