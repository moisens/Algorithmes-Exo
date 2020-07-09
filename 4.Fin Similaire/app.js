// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".


function similarEndWord(firstWord, secondWord){
   let identicalWord = firstWord.slice(- secondWord.length);
   if(identicalWord === secondWord){
      console.log('The end of the two words Matches');
   }else{
      console.log('The end of the two words Don\'t Match ');
   }
   return identicalWord;
}
console.log(similarEndWord('it is ours', 'ours'));


 

