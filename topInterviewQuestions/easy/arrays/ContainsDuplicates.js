/* 
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Input: [1,2,3,1]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const sortedNums = nums.sort();
  let hasDuplicate = false;

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i + 1] !== undefined && sortedNums[i] === sortedNums[i + 1]) {
      hasDuplicate = true;
    }
  }
  return hasDuplicate;
};
