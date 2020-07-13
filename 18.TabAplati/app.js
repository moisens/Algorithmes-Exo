// function aplatisCeTableau(arr) {
//    let tab = [];
//    arr.forEach((item) =>{
//       itemToPush(item);
       
//       if(Array.isArray(item)){
//        tab.push(parseInt(item[0]))
//        item.shift(item[0])
//        item.forEach((item) =>{
//         tab.push(parseInt(item))
         
//        })
//        console.log(tab)
//       }



//       //Function to push no arr item
//       function itemToPush(){
//          if(!Array.isArray(item)){
//             tab.push(item)
//          }
//        }
//    })

    
//     return tab;
    
   

// }
  
// console.log(aplatisCeTableau([1, {}, [3, [[4]]]] ));



function aplatisCeTableau(arr) {
   let tab = [];

   function aplatiTab(item){
      if(Array.isArray(item)){
         for(let i=0; i<item.length; i++){
            aplatiTab(item[i]);
         }
      }else{
         tab.push(item);
      }
   };

   arr.forEach(aplatiTab);
   return tab
   
   
    
   

}
  
console.log(aplatisCeTableau([1, {}, [3, [[4]]]]));


// [1, [2], [3, [[4]]]]  retourne [1,2,3,4];
// ([1, [], [3, [[4]]]]) retourne [1, 3, 4].
// [1, {}, [3, [[4]]]]   retourne [1, {}, 3, 4].

// ----------------- ÉNONCÉ -----------------

// Cet algorithme prends un tableau composé lui même de plusieurs tableaux en 
// entrée. Vous devez "aplatir" les différentes couches de tableaux, c'est à dire
// retourner un seul tableau qui contient les valeurs de tous les tableaux qui le
// composent.


// ----------------- CONSEILS -----------------

// Recursion;
// Array.isArray();
// forEach();
// Boucle for...