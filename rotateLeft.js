let d = 2;
let arr = [1, 2, 3, 4, 5];

let resultado = rotateLeft(d, arr);
console.log(resultado);

function rotateLeft(d, arr) {
  let arrayLength = arr.length;
  let newArr = new Array(arrayLength);

  for (let position = 0; position < arrayLength; position++) {
    let finalPosition = position - d;

    if (finalPosition < 0) {
      finalPosition = arrayLength + finalPosition;
      newArr[finalPosition] = arr[position];
    } else {
      newArr[finalPosition] = arr[position];
    }
  }
  return newArr;
}
