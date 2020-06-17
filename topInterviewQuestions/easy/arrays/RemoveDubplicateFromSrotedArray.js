/**
 * @param {number[]} nums
 * @return {number}
 */

/*
 Given nums = [1,1,2],
 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 */

const removeDuplicates = (nums) => {
  let indexOfUniqueEl = 1;

  for (let i = 0; i < nums.length; i++) {
    /* 1. check if num[i+1] not out of array range, that it exists
       2. if nums[i] !== nums[i + 1] that means that nums[i + 1] is unique because array is sorted and duplicates follow each other
    */
    if (nums[i + 1] !== undefined && nums[i] !== nums[i + 1]) {
      // place not duplicate at the new index
      nums[indexOfUniqueEl] = nums[i + 1];
      // move index by one for the next iteration
      indexOfUniqueEl++;
    }
  }
  // by the end of the loop indexOfUniqueEl will be equal to the amount of the unique elements ("length" of the new array)
  return indexOfUniqueEl;
};
