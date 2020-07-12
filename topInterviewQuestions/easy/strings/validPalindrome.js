// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  //regex to target only chars and numbers
  const regex = /[a-z0-9]/i;
  let start = 0;
  let end = s.length - 1;

  if (!s.length) return true;

  while (start < end) {
    // if char from the start is not valid character - skip it
    if (!regex.test(s[start])) {
      start++;
    }
    // else if character from the end not valid - skip IT
    else if (!regex.test(s[end])) {
      end--;
    }
    // else (if they are both valid) compare them and check if they are equal. If not - return false because it is not palindrome
    else if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }
    // if they are equal move to the next character
    else {
      start++;
      end--;
    }
  }
  // if we are out of the loop - the string is a palindrome
  return true;
};
