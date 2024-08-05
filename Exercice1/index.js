//votre code ici

function pairNumbers(a, b) {
  let pairNumbersArray = [];

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      pairNumbersArray.push(i);
    }
  }

  return pairNumbersArray;
}

export default pairNumbers;
