// Good Luck 💪🏾
//findSeven([1, 2, 3, 4, 5, 6, 7])
function findSeven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 7) {
        return "num 7 is Founded!";
      }
    }
    return "There is no 7 in the array.";
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findSeven(numbers)); // Output: Found!

const otherNumbers = [1, 2, 3, 4, 5, 6, 8, 9];
console.log(findSeven(otherNumbers)); // Output: There is no 7 in the array.