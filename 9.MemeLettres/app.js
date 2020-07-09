function memeLettres(arr) {
   let str1 =  arr[0].toLowerCase()
   let str2 = arr[1].toLowerCase()// str to test

   console.log(str1, str2);
   for(let i=0; i<str2.length; i++){
      if(str1.indexOf(str2[i]) === -1){
         return false;
      }
   }
   return true;
}
console.log(memeLettres(["hello", "llohe"]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();