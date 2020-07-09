//1) For (1ère façon)
// function trouverLongueurMax(str){
//    let slpitedSentence = str.split(' ')

//    let arrLengthEachWord = [];
//    //Parcourir le tableau et push la longuer de chaque mot  dans un autre tableau
//    for(let i=0; i<slpitedSentence.length; i++){
//       arrLengthEachWord.push(slpitedSentence[i].length);   
//    }
//    //Décomposer le tableau avec ...
//    return Math.max(...arrLengthEachWord);
   



// }


// console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));

//2) For(2eme façon d faire)

// function trouverLongueurMax(str){
//    let laprase = str.split(' ');
//    //console.log(laprase);

//    let longMax = 0;
//    for(let i=0; i<laprase.length; i++){
//       if(laprase[i].length > longMax){
//          longMax = laprase[i].length;
//          //console.log(longMax)
//       }
//    }
//    return longMax;
   



// }


// console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));


//3 Reduce

 function trouverLongueurMax(str){
       let theWord = str.split(' ');
       console.log(theWord)
       return theWord.reduce((x,y) => {
          return Math.max(x,y.length)
       }, 0)       
     }  
    console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));

//Recursion
// function trouverLongueurMax(str){
//    let arr = str.split(' ');

//    if(arr.length === 1){
//       return arr[0].length;
//    }
   
//    if(arr[0].length >= arr[1].length){
//       arr.splice(1,1)
//       return trouverLongueurMax(arr.join(' '));
//    }

//    if(arr[0].length <= arr[1].length){
//       //On retourne un tableu depuis la position 1 jusqu'à la fin du tableau
//       return trouverLongueurMax(arr.slice(1, arr.length).join(' '));
//    }


//  }


//console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));


// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Le but ici va être de le faire de trois manières différentes, avec trois concepts
// différents.
 
// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)