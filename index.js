function isPalindrome(word) {
  if (word.split('').reverse().join('') === word) {
    return true 
  } else {
    return false
  }
}

/* 
Need to split the string into an array of letters
  Use .split(" ")
Use the .reverse() method to reverse the array of letters
Use .join() method to rejoin the elements of the array (letters) back into a string
If the string is equal to the reversed string, return true
Otherwise, return false
*/

/*
  function isPalindrome takes a string as an argument
    if the string is equal to a palindrome:
      return true
    if the string is not equal to a palindrome:
      return false  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

