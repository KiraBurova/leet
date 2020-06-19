// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const nonDubplicateElements = [];

  for (let i = 0; i < nums.length; i++) {
    if (!nonDubplicateElements.includes(nums[i])) {
      nonDubplicateElements.push(nums[i]);
    } else {
      nonDubplicateElements.splice(nonDubplicateElements.indexOf(nums[i]), 1);
    }
  }

  return nonDubplicateElements[0];
};
