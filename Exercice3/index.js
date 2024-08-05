// Créez votre fonction ici

function calculateAverage(arrayOfNumbers = []) {
  if (arrayOfNumbers.length === 0) {
    return "No numbers to calculate average";
  }

  let sumOfNumbers = arrayOfNumbers.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sumOfNumbers / arrayOfNumbers.length;
}

// function calculateAverage(arrayOfNumbers = []){
//     if (arrayOfNumbers.length === 0) {
//         return 'No numbers to calculate average'
//     }

//     let sum= 0
//     for(i = 0; i < arrayOfNumbers.length ; i++){
//         sum += arrayOfNumbers[i]
//     }

//     return sum / arrayOfNumbers.length
// }

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

// export default calculateAverage
