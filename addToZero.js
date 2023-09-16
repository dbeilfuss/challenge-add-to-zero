// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:

function addToZero(numberArray) {
  let addsToZero = false;

  for (let i = 0; i < numberArray.length; i++) {
    for (let test = i + 1; test < numberArray.length; test++) {
      console.log(numberArray[i] + "+" + numberArray[test]);
      if (numberArray[i] + numberArray[test] === 0) {
        addsToZero = true;
      }
    }
  }

  return addsToZero;
}

let addsToZero = addToZero(array);
console.log(addsToZero);
