const myMessage = document.querySelector('.scriptResult');

var answer = window.prompt("Enter your name: ");
var output = "";

if ( answer == "Eleanor" ) {
	output = output + answer + ", hi! " 
} else if (answer == "Hannah" ) {
	output = output + answer + ", I love that name";
} else if (answer == "loretta") {
	output = output + answer + ",why, thats my name too!";
} else if (answer == "coleman" ) {
	output = output + answer + ", yes i know, your last name is brightwell";
} else if (answer == "elijah" ) {
	output = output + answer + ", yes i know, your my brother";
} else if (answer == "someone" ) {
	output = output + answer + ", hello someone, i would love it if you stoped being vague ";
} else if (answer == "baby shark" ) {
	output = output + answer + ", -do do do do do baby shark-";
} else {
		output = output + answer + ", hi."+answer+  " I dont know you";
}
myMessage.textContent = output;

