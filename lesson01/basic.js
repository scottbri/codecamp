var test = 1;
var message = "I love my life";
var name = "eleanor";

function permutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = permutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

const myMessage = document.querySelector('.scriptResult');
var output = "";
var nameResult = permutations(name);
var columns = 4;

for (var i = 0; i < nameResult.length; i++) {
	output = output + nameResult[i];
	if ( i%columns == 0) {
		output = output + " ";
	} else {
		output = output + " ";
	}
}

myMessage.textContent = output;
console.log(myMessage.textContent.length);

