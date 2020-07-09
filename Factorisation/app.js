// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5! = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont
// égaux à N, ici 5.

// ----------------- CONSEILS -----------------

// La boucle "for" est ton amie.

// function factNbr(nbr){

//    //5
//    //20
//    //60
//    //120
   
//    for(i=1; nbr >1; nbr--){
//       i = nbr * i
//    }
//    return i;

// }
// console.log(factNbr(5))


//Version Récursion
function factNbr(nbr){

   if(nbr === 0){
      return nbr = 1;

   }
   return nbr * factNbr(nbr - 1)
   
   }
   //5 * 4 * 3 * 2 * 1 * 1

   console.log(factNbr(7))
   
