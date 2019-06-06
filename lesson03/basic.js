var myMessage = document.getElementById("scriptResult");


var happyFace = document.getElementById("happy");
var sadFace = document.getElementById("sad");
var angryFace = document.getElementById("angry");
var coolFace = document.getElementById("cool");
var surprisedFace = document.getElementById("surprised");

var answer = getName();
var output = greeting(answer);
myMessage.innerHTML = output;

happyFace.addEventListener('click', happyDo, false);
sadFace.addEventListener('click', sadDo, false);
angryFace.addEventListener('click', angryDo, false);
coolFace.addEventListener('click', coolDo, false);
surprisedFace.addEventListener('click', surprisedDo, false);

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

function happyDo() {
	var emotion = "happy";
	console.log(answer + " is " + emotion);
	iAmFeeling(emotion);
}
function sadDo() {
	var emotion = "sad";
	console.log(answer + " is " + emotion);
	iAmFeeling(emotion);
}
function angryDo() {
	var emotion = "angry";
	console.log(answer + " is " + emotion);
	iAmFeeling(emotion);
}
function coolDo() {
	var emotion = "cool";
	console.log(answer + " is " + emotion);
	iAmFeeling(emotion);
}
function surprisedDo() {
	var emotion = "surprised";
	console.log(answer + " is " + emotion);
	iAmFeeling(emotion);
}

function iAmFeeling(feeling) {
	var message = ""
	switch(feeling) {
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
				for (var i = 1; i < number; i++) {
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

