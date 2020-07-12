 const meilleurJourInvest = [];
 const meilleurJourVendre = [];
 let posJourInvest;
 let posJourVente;
 const jours = ['dimanche' ,'lundi' ,'mardi' ,'mercredi' ,'jeudi' ,'vendredi' ,'samedi'];
 let date = [];



 function meilleurInvestissement(arr){
    //Trouver le min dans le tableau
    meilleurJourInvest.push(Math.min(...arr));
    //Trouver le max dans le tableau
    meilleurJourVendre.push(Math.max(...arr)); 
    posJourInvest = arr.indexOf(Math.min(...arr));
    posJourVente = arr.indexOf(Math.max(...arr));
    //console.log(posJourInvest);
    //console.log(posJourVente)
    //Parcourir le [] des jours
    for(let i=0; i<jours.length; i++){
       //Si l'index des jours[i] == à l'index du MIN OU l'index des jours[i] == à l'index du MAX
       if(jours.indexOf(jours[i]) === posJourInvest || jours.indexOf(jours[i]) === posJourVente){
          date.push(jours[i])       
       }    
    }
    console.log(date) 
    let montantBenef = meilleurJourVendre - meilleurJourInvest;
     return `
          Le meilleur coup à faire cette semaine était d'investir
          le ${date[1]} et de revendre le ${date[0]} pour un bénéfice de ${montantBenef}€
     `;
 }

 console.log(meilleurInvestissement([50,96,20,2,80,60,20]));



// function meilleurInvestissement(arr){
   
//    let benfice = 0;
//    let pos = 0;
//    let test = 0;
//    let date = [];
//    let jours = ['dimanche' ,'lundi' ,'mardi' ,'mercredi' ,'jeudi' ,'vendredi' ,'samedi'];

//    for(let i=0; i<arr.length; i++){
//       test = arr[i];
//       //console.log(test)

//       for(let j=pos; j<arr.length; j++){
//          if(arr[j] - test > benfice){
//             benfice = arr[j] - test;

//             date.push([test, arr[j]])
            
//             if(date.length > 1){
//                date.shift();
               
//             }
            
//          } 
//       }

//    }
//    console.log(date)

//    return `
//       Le meilleur coup à faire cette semaine était d'investir
//       le ${jours[arr.indexOf(date[0][0])]} et de revendre le ${jours[arr.indexOf(date[0][1])]} pour un bénéfice de ${benfice}.
//    `;
   
   
   


   

// }

// console.log(meilleurInvestissement([50,19,20,2,80,60,20]));



// ----------------- ÉNONCÉ -----------------

// Vous avez 7 valeurs dans un tableau qui représente le cours de l'or pour les 
// 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et 
// le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Mercredi(3eme valeur du tableau), avec un cours
// à 2€ et le meilleur pour vendre est Jeudi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir
// le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement
// retourner le jour d'achat, le jour de vente, et le montant du bénéfice.

// Bon courage !


// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();