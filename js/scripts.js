function palindrome(string) {
  var stringLower = string.toLowerCase();
  var arrayLower = stringLower.split("");
  var length = arrayLower.length;
  for(var i = 0; i < length; i += 1) {
    if (arrayLower[i] === " ") {
      arrayLower.splice(i,1);
    }
  }
  var stringForward = arrayLower.slice().join("");
  var stringReverse = arrayLower.reverse().join("");
  if (stringForward === stringReverse) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(){
  $("form#palindrome").submit(function(event) {

    event.preventDefault();

    var word = $("input#wordinput").val();

    var result = palindrome(word);

    if (!result) {
      $("#answer").text("not ");
    } else {
      $("#answer").text("");
    }


    $(".result").show();
  });
});
