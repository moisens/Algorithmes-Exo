// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en 
// argument et qui retourne un seul tableau qui contient la valeur maximale de 
// chaque tableaux.


  
function plusGrandNb(arr) {
   //Declaring the first Array
   let valMaxAllArrs = [];
   //Loop through the []
   for(let i=0; i<arr.length; i++){
      //console.log(arr)
      //Loop through each array in the First Arr
      
      //Declaring the initial value of valMax
      let valMax = arr[i][0];
      for(let j=1; j<arr[i].length; j++){
         if(arr[i][j] > valMax){
            //reinialise valMax
            valMax = arr[i][j];
            
         }
         
      }
      valMaxAllArrs.push(valMax)
      console.log(valMaxAllArrs)
   }



   
 }
 
 
 console.log(plusGrandNb([
                         [1, 5, 8, 3, 9],
                         [15, 47, 88, 26],
                         [32, 35, 37, 39],
                         [3000, 1001, 857, 1],
                         [4000, 3001, 2857, 21]
                       ]));
 