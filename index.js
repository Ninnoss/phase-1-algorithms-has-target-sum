/* 
  Add your pseudocode here
  -loop through the array items
  -sum the current and next item
  -if sum = target, return true
  -else, return false
*/
/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  space: O(n)
*/
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complementNum = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complementNum) return true;
    }
  }
  return false;
}

//////////////////////////////////////////////////////////////

// 2nd Solution
// runtime: O(n)
// space: O(n)
function hasTargetSum(array, target) {
  // create an object to keep track of numbers we've already seen
  const seenNumbers = {};
  // iterate through each number in the array
  for (num of array) {
    // for the current num, identify a complement that adds to the target (comp = target - num)
    const complementNum = target - num;
    // check if any key on our object is the complement. if so, return true.
    if (complementNum in seenNumbers) return true; // this is syntax to check if a key exists in an object
    // otherwise, add the number (that is not the complement) to the object
    seenNumbers[num] = true; // here we just giving the numbers a boolean value, you can give it any value
  }
  return false;
}
//////////////////////////////////////////////////////////////

/* 
using a set instead of a normal object.
Set objects are collections of values. You can iterate through the elements of a set in insertion order. 
A value in the Set may only occur once; it is unique in the Set's collection.
Time complexity: O(n)
Space complexity: O(n)
 */

function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log('');

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', hasTargetSum([1, 2, 5], 4));

  console.log('');

  console.log('');
  // Negative numbers?
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([-7, 10, 4, 8], 3));

  console.log('');
  // Multiple pairs?
  console.log('Expecting: true');
  console.log('=>', hasTargetSum([1, 2, 3, 4], 5));

  console.log('');
  // Single numbers?
  console.log('Expecting: false');
  console.log('=>', hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
