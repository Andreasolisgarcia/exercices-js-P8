// Créez votre fonction ici

function calculate(a, b, sign) {
  const allowedSigns = ["+", "-", "/", "*"];

  const isValidSign = allowedSigns.includes(sign);
  if (!isValidSign) {
    return "Invalid operator";
  }

  const aN = Number(a);
  const bN = Number(b);

  switch (sign) {
    case "+": {
      return aN + bN;
    }
    case "-": {
      return aN - bN;
    }
    case "*": {
      return aN * bN;
    }
    case "/": {
      if (bN === 0) {
        return "Division by zero is not allowed";
      }
      return aN / bN;
    }
  }
}

// //Exemples d'utilisation de la fonction
// console.log(calculate(5, 3, "+")); // Affiche 8
// console.log(calculate(10, 4, "-")); // Affiche 6
// console.log(calculate(7, 2, "*")); // Affiche 14
// console.log(calculate(12, 3, "/")); // Affiche 4
// console.log(calculate(8, 0, "/")); // Affiche "DivisionbNy zero is not allowed"
// console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"
// console.log(calculate(4,5,'@'))
export default calculate;
