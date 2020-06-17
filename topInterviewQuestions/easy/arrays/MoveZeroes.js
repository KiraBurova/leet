// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  // index to keep last non zero element
  let lastNonZeroIndex = 0;
  // go over each element in nums
  for (let i = 0; i < nums.length; i++) {
    // if element is not zero
    if (nums[i] !== 0) {
      // move it to the new index, to the beginnig of the array
      nums[lastNonZeroIndex] = nums[i];
      // increment index
      lastNonZeroIndex++;
    }
  }
  // after all non zero elements are moved, loop over array starting from the last non zero element
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    // and make all elements after it equal to zero
    nums[i] = 0;
  }
};
