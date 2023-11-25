let arr1 = [1, 3, 4, 5, 6, 7];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 9];

const findMissing = (input) => {
  let result = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i + 1] - input[i] > 1) return input[i] + 1;
  }

  return result;
};
console.log(findMissing(arr1));
console.log(findMissing(arr2));