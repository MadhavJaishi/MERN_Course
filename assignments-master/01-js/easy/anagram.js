/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let removeSpace = (str) => {
    let result = ""
    for (let i = 0; i < str.length; i++) {
      if (str[i] != " ") result += str[i]
    }
    return result
  }
  str1 = removeSpace(str1).toLowerCase().split('').sort().join('');
  str2 = removeSpace(str2).toLowerCase().split('').sort().join('');
  
  return str1 === str2 ? true : false;
}

module.exports = isAnagram;
