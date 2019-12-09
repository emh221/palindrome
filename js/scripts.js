function palindromeCheck(word) {
  let wordCharacters = word.split("");
  for (var index = 0; index < wordCharacters.length; index += 1){
    if(wordCharacters[index] === " ") {
      wordCharacters.splice(index, 1);
    }
    var reverseWordCharacters = wordCharacters.slice();
    reverseWordCharacters.reverse();
    var reverseWordCharactersString = reverseWordCharacters.toString();
    var wordCharactersString = wordCharacters.toString();
    if (wordCharactersString.toUpperCase() === reverseWordCharactersString.toUpperCase()) {
      return true;
    } else {
      return false;
    }
    console.log(reverseWordCharactersString);
    console.log(wordCharactersString);
  }
}

$(document).ready(function(){
  $("form#palindrome").submit(function(event) {

    event.preventDefault();

    var possiblePalindrome = $("input#wordinput").val();

    var characters = possiblePalindrome.split("");

    for(var index = 0; index < characters.length; index += 1) {
      if (characters[index] === " ") {
        characters.splice(index, 1);
      }
    }

    console.log(possiblePalindrome);

    console.log(characters);

    var reverseCharacters = characters.slice();

    reverseCharacters.reverse();

    console.log(reverseCharacters);

    var wordBackward = reverseCharacters.toString();

    var wordForward = characters.toString();

    console.log(wordBackward);

    console.log(wordForward);

    var wordForwardUpperCase = wordForward.toUpperCase();

    var wordBackwardUpperCase = wordBackward.toUpperCase();

    console.log(wordForwardUpperCase);

    console.log(wordBackwardUpperCase);

    if (wordForwardUpperCase === wordBackwardUpperCase) {
      var result = " a palindrome.";
    } else {
      var result = " not a palindrome.";
    }


    $("#answer").text(result);


    $(".result").show();
  });
});
