if (!result) {
  $("#answer").text(" not a palindrome.")
} else if (result === true) {
  $("#answer").text(" a palindrome.")
}

var palindromeCheck = (possiblePalindrome) =>  {
  var possiblePalindromeLetters = possiblePalindrome.split("");
  for( var index = 0; index < possiblePalindromeLetters.length; index += 1) {
    if (possiblePalindromeLetters[index] === " ") {
      possiblePalindromeLetters.splice(index,1,"");
    }
  }
}
