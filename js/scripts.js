var currentLetter = "";
var outputString = "";


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var letters = $("#sentence").val().split("");
    for (var index=0; index < letters.length; index += 1) {
      currentLetter = letters[index];
      if (letters[index] === "a") {
        letters[index] = "-";
      } else if (letters[index] === "e") {
        letters[index] = "-";
      } else if (letters[index] === "i") {
        letters[index] = "-";
      } else if (letters[index] === "o") {
        letters[index] = "-";
      } else if (letters[index] === "u") {
        letters[index] = "-";
      } else if (letters[index] === "y") {
        letters[index] = "-";
      }
    }
    console.log(letters)
    $(".thing").text(letters);
    // $("#input").hide();
    // $("#resulter").show()
  });
});
