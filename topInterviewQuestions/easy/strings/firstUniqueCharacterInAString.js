// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
    // if index of character equals the last index of the characters it means that there is only one of this character in the strings
    if (s.indexOf(chars[i]) === s.lastIndexOf(chars[i])) {
      return i;
    }
  }
  return -1;
};
