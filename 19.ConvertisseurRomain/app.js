let convertisseurRomain = function(num) {

   let valeurDecimale = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
   let chiffreRomains = 
   [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
   let chiffRomain = '';

   for(let i=0; i<valeurDecimale.length; i++){
      while(num >= valeurDecimale[i]){
         chiffRomain += chiffreRomains[i];
         num -= valeurDecimale[i];
      }
   }
   return chiffRomain;

}
     
console.log(convertisseurRomain(8));

// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII

// ----------------- ÉNONCÉ -----------------

// Vous devez créer un algorithme qui va convertir le nombre passé en parametre
// en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// ----------------- CONSEILS -----------------

// For;
// while;