var myMessage = document.getElementById("scriptResult");


var happyFace = document.getElementById("happy");
var sadFace = document.getElementById("sad");
var angryFace = document.getElementById("angry");
var coolFace = document.getElementById("cool");
var surprisedFace = document.getElementById("surprised");
var mathFace = document.getElementById("math");

var answer = getName();
var output = greeting(answer);
myMessage.innerHTML = output;

happyFace.addEventListener('click', iAmFeeling, false);
happyFace.emotion = "happy";
sadFace.addEventListener('click', iAmFeeling, false);
sadFace.emotion = "sad";
angryFace.addEventListener('click', iAmFeeling, false);
angryFace.emotion = "angry";
coolFace.addEventListener('click', iAmFeeling, false);
coolFace.emotion = "cool";
surprisedFace.addEventListener('click', iAmFeeling, false);
surprisedFace.emotion = "surprised";
mathFace.addEventListener('click', iAmFeeling, false);
mathFace.emotion = "math";

function getName() {
	var name = window.prompt("What's your name? ");
	output = ""; // reset the output text 
	return name;
}

function greeting(name) {
	var message = "";
	if ( name == "Eleanor" ) {
		message = name + ", hi! ";
	} else if (name == "Hannah" ) {
		message = name + ", I love that name";
	} else if (name == "Loretta") {
		message = name + ",why, thats my name too!";
	} else if (name == "Coleman" ) {
		message = name + ", yes i know, your last name is brightwell";
	} else if (name == "Elijah" ) {
		message = name + ", yes i know, your my brother";
	} else if (name == "Scott" ) {
		message = name + ", thanks for c0d3 c4mp!";
	} else if (name == "someone" ) {
		message = name + ", hello someone, i would love it if you stoped being vague ";
	} else if (name == "baby shark" ) {
		message = name + ", -do do do do do baby shark-";
	} else {
			message = name + ", hi." + name +  " I dont know you";
	}
	return(message);
}

function iAmFeeling(event) {
	var message = "";
	var feeling = event.currentTarget.emotion;

	console.log(answer + " is " + feeling);

	switch(feeling) {
		case "H":
		message = "Why, oh, why did you click on the H??, " + answer;
		output = output + "<br>" + message.bold();
		myMessage.innerHTML = output;
	    break;
	  case "happy":
		message = "That's wonderful, " + answer;
		output = output + "<br>" + message.bold();
		myMessage.innerHTML = output;
	    break;
	  case "sad":
		message = "Oh no, " + answer + ".";
		message = message + "<br>" + "Here, have some ice cream!";
		output = output + "<br>" + message.bold();
		myMessage.innerHTML = output;
	    break;
	  case "angry":
		message = "Eeek, " + answer;
		message = message + "<br>" + "Everything will be ok.  Please forgive!";
		output = output + "<br>" + message.bold();
		myMessage.innerHTML = output;
			break;
		case "cool":
				var phrase = window.prompt("What phrase do you want me to repeat? ");	
				var number = window.prompt("How many times should I repeat that? ");	
				output = "";
				for (var i = 1; i <= number; i++) {
					output = output + "<br>" + phrase + " #" + i;
				}
			myMessage.innerHTML = output;
	  break;
	  case "surprised":
			answer = getName();
			output = greeting(answer);
			myMessage.innerHTML = output;
	    break;
	  default:
		message = "That's an interesting perspective.";
		output = output + "<br>" + message.bold();
		myMessage.innerHTML = output;
  }
}

