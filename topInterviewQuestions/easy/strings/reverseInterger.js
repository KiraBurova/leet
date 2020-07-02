// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  // string with numbers' modulus
  const str = '' + Math.abs(x);
  const nums = str.split('');
  // coeff for turning number negative if needed
  const k = x < 0 ? -1 : 1;
  let left = 0;
  let right = nums.length - 1;
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);

  while (left < right) {
    const temp = nums[left];

    nums[left] = nums[right];

    nums[right] = temp;

    left++;
    right--;
  }

  const string = nums.join('');
  const num = Number(string) * k;

  if (num > max || num < min) {
    return 0;
  }

  return num;
};
