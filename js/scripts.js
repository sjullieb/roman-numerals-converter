var symbols = [[1, "I"], [5, "V"], [10, 'X'], [50, "L"], [100, "C"], [500, "D"], [1000, "M"]];

// $(document).ready(function() {
//
//   $("input#name").focus();
//
//   $("#mainForm").submit(function(event) {
//
// //    alert("hi");
//     var nameInput = $("input#name").val();

$(document).ready(function(){
  $("#main").submit(function(event){
    var inputNumber = parseInt($("input").val());
    var symbolIndex = 6;
    var outputText = "";
    var numberOfSameSymbolsInARow = 0;
    var number = inputNumber;

    while(number !== 0){
      if(number-symbols[symbolIndex][0] < 0){
        symbolIndex--;
        numberOfSameSymbolsInARow = 0;
      } else {

        number -= symbols[symbolIndex][0];
        if (numberOfSameSymbolsInARow === 3){
          console.log(outputText);
          outputText = outputText.slice(0, outputText.length - 4) + symbols[symbolIndex][1] + symbols[symbolIndex+2][1];
          numberOfSameSymbolsInARow = 1;
        } else {
          outputText += symbols[symbolIndex][1];
          numberOfSameSymbolsInARow += 1;
        }
      }
    }

    $("#result").text(outputText);

    event.preventDefault();
  });
});
