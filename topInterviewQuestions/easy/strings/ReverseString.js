// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  // use two pointers approach

  // get els from the start and from the end;
  let beginning = 0;
  let end = s.length - 1;

  while (beginning < end) {
    // save el from the start in the variable
    let temp = s[beginning];
    // move last el to first
    s[beginning] = s[end];
    // move previously saved el to end
    s[end] = temp;
    // move in array to the right and left by one from different ends
    beginning++;
    end--;
  }
};
