function convertCelToFarn(degCel){
   const tempCelToTempFarnh = (degCel*(9/5) + 32);
   if(typeof tempCelToTempFarnh !== 'number'){
      console.log('Donnée en entrée non correcte');
   }else{
      return tempCelToTempFarnh;
   }


}

console.log(convertCelToFarn(24))

//Bonus*
function convertFarnToCel(degFarnh){
   const tempFanrnToTempCels = (degFarnh - 32) * 5/9;
   if(typeof tempFanrnToTempCels !== 'number'){
      console.log('Veuillez entrer un chiffre svp');
   }else{
      return tempFanrnToTempCels;
   }

}

console.log(convertFarnToCel('75.2'));







// ----------------- ÉNONCÉ -----------------

// Créer un algorithme qui sert à convertir des degrés Celsius
// en degrés Fahrenheit.
// Le résultat doit être de type nombre.
// Si on donne un autre type qu'un nombre en argument, vous
// devez retourner "Données en entrée non correctes."
// Bonne Chance !

// ----------------- CONSEILS -----------------

// le calcul pour convertir les degrés Celsius en Fahrenheit
// est : (degCel * (9/5) + 32);

// Pour connaitre le type de notre argument on peut faire
// console.log(typeof(5));  "number"
// console.log(typeof("abc"));  "string"
// etc ...
