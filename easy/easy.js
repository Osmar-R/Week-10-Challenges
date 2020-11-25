const arr = [3, 6, 9, 12, 15, 18, 21];
const sum = 0;

for (var i in arr) {
  sum += arr[i];
}

const numInArray = arr.length;

const averageOfArr = sum / numInArray;
console.log(`The average of the numbers in the array is ${averageOfArr}`);
